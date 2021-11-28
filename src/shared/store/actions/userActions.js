import * as actionTypes from '../constants/userConstant';
import { USER_PROFILE_API } from '../../constants/api-routes.constants';
import flevar from '../../../api/api';

export const loadUserDetail = () => async (dispatch) => {
    try {
        const data = { id: 1 }
        dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: data });
    } catch (error) {
        await dispatch({ type: actionTypes.GET_USER_FAIL, payload: error.response });
    }
};

export const loadUserProfile = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_USER_PROFILE, payload });
    const options = { headers: { 'token': "Bearer " + payload } }
    return flevar.get(`${USER_PROFILE_API}`, options).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_USER_PROFILE_SUCCESS, payload: data['data'] });
    });
};

export const resetUserProfile = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.RESET_USER_PROFILE_SUCCESS, payload: null });
    } catch (error) {
        await dispatch({ type: actionTypes.RESET_USER_PROFILE_FAIL, payload: error.response });
    }
};

export const userLoginMobile = (mobile) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_USER__MOBILE_SUCCESS, payload: mobile });
    } catch (error) {
        await dispatch({ type: actionTypes.GET_USER_MOBILE_FAIL, payload: error.response });
    }
};