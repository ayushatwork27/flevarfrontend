import { SEND_OTP_API, LOGOUT_API, VERIFY_OTP_API, USER_PROFILE_API, REGISTER_API } from '../../constants/api-routes.constants';
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

export const verifyOtpOnServer = payload => dispatch => {
    dispatch({ type: actionTypes.VERIFY_OTP, payload: undefined });
    return flevar.post(VERIFY_OTP_API, payload).then(response => {
        if (response.status === 200) {
            const { token } = response['data']['data']['data'];
            dispatch(userProfile(token));
            localStorage.setItem('token', token);
        }
    });
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
            localStorage.setItem('flevar_user', JSON.stringify(data['data']));
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