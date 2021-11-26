import * as actionTypes from '../constants/userConstant';

export const loadUserDetail = () => async (dispatch) => {
    try {
        const data = { id: 1 }
        dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: data });
    } catch (error) {
        await dispatch({ type: actionTypes.GET_USER_FAIL, payload: error.response });
    }
};

export const userLoginMobile = (mobile) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_USER__MOBILE_SUCCESS, payload: mobile });
    } catch (error) {
        await dispatch({ type: actionTypes.GET_USER_MOBILE_FAIL, payload: error.response });
    }
};