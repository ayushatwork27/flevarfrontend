import * as actionTypes from '../types/address.types';
import { ADDRESS_LIST_API } from '../../constants/api-routes.constants';
import flevar from '../../../api/api';


export const getAddressList = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload: [] });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_LIST_FAILURE, payload: response });
    });
};

export const addAddress = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};

export const updateAddress = (payload, id) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${id}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};

export const getAddress = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload: {} });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};