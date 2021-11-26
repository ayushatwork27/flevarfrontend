import * as actionTypes from '../constants/addressConstant';
import { getUserAddresses, addressSave, addressUpdate, getAdress } from "../../service/api";

export const loadAddresses = (id) => async (dispatch) => {
    try {
        const { data } = await getUserAddresses(id);
        dispatch({ type: actionTypes.GET_ADDRESSES_SUCCESS, payload: data });
    } catch (error) {
        await dispatch({ type: actionTypes.GET_ADDRESSES_FAIL, payload: error.response });
    }
};

export const addAddress = (address) => async (dispatch) => {
    try {
        await addressSave(address);
        dispatch({ type: actionTypes.ADD_ADDRESS_SUCCESS });
    } catch (error) {
        await dispatch({ type: actionTypes.ADD_ADDRESS_FAIL, payload: error.response });
    }
};

export const updateAddress = (address, id) => async (dispatch) => {
    try {
        await addressUpdate(address, id);
        dispatch({ type: actionTypes.UPDATE_ADDRESS_SUCCESS });
    } catch (error) {
        await dispatch({ type: actionTypes.UPDATE_ADDRESS_FAIL, payload: error.response });
    }
};

export const getAddress = (id) => async (dispatch) => {
    try {
        const { data } = await getAdress(id);
        dispatch({ type: actionTypes.GET_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_ADDRESS_FAIL, payload: error.response });
    }
};