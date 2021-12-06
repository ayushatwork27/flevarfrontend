import { SEND_OTP_API, LOGOUT_API, VERIFY_OTP_API, USER_PROFILE_API, REGISTER_API, PROFILE_UPDATE_API, ADDRESS_LIST_API } from '../../constants/api-routes.constants';
import * as actionTypes from '../types/app.types';
import flevar from '../../../api/api';

export const authenticateLogin = payload => dispatch => {
    dispatch({ type: actionTypes.LOGIN, payload: undefined });
    return flevar.post(SEND_OTP_API, payload).then(response => {
        if (response.status === 200) {
            localStorage.setItem('mobile', payload['mobile']);
        }
    });
};

export const verifyOtpOnServer = payload => {
    // dispatch({ type: actionTypes.VERIFY_OTP, payload: undefined });
    return flevar.post(VERIFY_OTP_API, payload).then(response => response);
};

export const authenticateLogOut = payload => dispatch => {
    dispatch({ type: actionTypes.LOGOUT, undefined });
    const options = {
        headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    };
    return flevar.post(LOGOUT_API, payload, options).then(response => {
        const { success } = response['data'];
        if (success) {
            dispatch(userProfileReset());
            localStorage.clear();
        }
    });
};

export const userProfile = payload => async (dispatch) => {
    dispatch({ type: actionTypes.USER_PROFILE, payload: undefined });
    const options = {
        headers: { 'Authorization': "Bearer " + payload }
    };
    return flevar.get(`${USER_PROFILE_API}`, options).then(response => {
        const { success, data } = response['data'];
        if (success) {
            dispatch({ type: actionTypes.USER_PROFILE_SUCCESS, payload: data['data'] });
        } else dispatch({ type: actionTypes.USER_PROFILE_FAILURE, payload: response });
    });
};

export const userProfileReset = () => async (dispatch) => {
    dispatch({ type: actionTypes.USER_PROFILE_RESET, payload: undefined });
};

export const userRegister = payload => dispatch => {
    dispatch({ type: actionTypes.USER_REGISTER, payload: undefined });
    return flevar.post(REGISTER_API, payload).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.USER_REGISTER_FAILURE, payload: response });
    });
};

export const userUpdate = payload => dispatch => {
    dispatch({ type: actionTypes.USER_PROFILE_UPDATE, payload: undefined });
    const options = {
        headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    };
    return flevar.post(PROFILE_UPDATE_API, payload, options).then(response => {
        const { success, data } = response['data'];
        if (success) {
            dispatch({ type: actionTypes.USER_PROFILE_UPDATE_SUCCESS, payload: data['data'] });
            dispatch(userProfile(localStorage.getItem('token')));
        } else dispatch({ type: actionTypes.USER_PROFILE_UPDATE_FAILURE, payload: response });
    });
};

export const getAddressListAction = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload: undefined });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_LIST_FAILURE, payload: response });
    });
};

export const addAddressAction = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};

export const updateAddressAction = (payload, id) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${id}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};

export const getAddressAction = (payload) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS_LIST, payload });
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
    });
};