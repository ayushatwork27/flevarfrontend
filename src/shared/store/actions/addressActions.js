import * as actionTypes from '../constants/addressConstant';
// import { getUserAddresses, addressSave, addressUpdate, getAdress } from "../../service/api";
import { ADDRESS_LIST_API } from '../../constants/api-routes.constants';
import flevar from '../../../api/api';


export const loadAddresses = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESSES, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESSES_SUCCESS, payload: data['data'] });
    });
};

export const addAddress = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESSES, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESSES_SUCCESS, payload: data['data'] });
    });
};

export const updateAddress = (payload, id) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESSES, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${id}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESSES_SUCCESS, payload: data['data'] });
    });
};

export const getAddress = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESSES, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESSES_SUCCESS, payload: data['data'] });
    });
};