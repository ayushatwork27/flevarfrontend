import * as actionTypes from '../types/address.types';
import { ADDRESS_LIST_API, ADDRESS_API } from '../../constants/api-routes.constants';
import flevar from '../../../api/api';


export const getAddressList = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload: [] });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_LIST_FAILURE, payload: response });
    });
};

export const addAddress = payload => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_ADDRESS, payload });
    return flevar.post(`${ADDRESS_API}`, payload).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch(getAddressList(data['data']['customer_id']));
    });
};

export const updateAddress = (payload, id, customerId) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ADDRESS, payload });
    return flevar.post(`${ADDRESS_API}/${id}`, payload).then(response => {
        const { success } = response['data'];
        if (success) dispatch(getAddressList(customerId));
    });
};

export const getAddress = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS, payload: {} });
    return flevar.get(`${ADDRESS_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_FAILURE, payload: response });
    });
};