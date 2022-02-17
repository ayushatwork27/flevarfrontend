import {
    SEND_OTP_API,
    LOGOUT_API,
    VERIFY_OTP_API,
    USER_PROFILE_API,
    REGISTER_API,
    PROFILE_UPDATE_API,
    ADDRESS_LIST_API,
    ADDRESS_API,
    LOCATION_LIST_API
} from '../../constants/api-routes.constants';
import * as actionTypes from '../types/app.types';
import { PINCODE, LOCATION_ID } from '../../constants/app.constants';
import flevar from '../../../api/api';
import {
    getProductListAction,
    getProductsAction
} from '../../../shared/store/actions/product.actions';

export const authenticateLogin = payload => dispatch => {
    dispatch({ type: actionTypes.LOGIN, payload: undefined });
    return flevar.post(SEND_OTP_API, payload).then(response => {
        if (response.status === 200) {
            localStorage.setItem('mobile', payload['mobile']);
        }
    });
};

export const verifyOtpOnServer = payload => {
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
            dispatch(getAddressListAction(data['data']['id']));
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
    const options = {
        headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
    };
    return flevar.get(`${ADDRESS_LIST_API}/${payload}`, options).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_LIST_FAILURE, payload: response });
    });
};

export const addAddressAction = payload => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_ADDRESS, payload });
    return flevar.post(`${ADDRESS_API}`, payload).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch(getAddressListAction(data['data']['customer_id']));
    });
};

export const updateAddressAction = (payload, id, customerId) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ADDRESS, payload });
    return flevar.post(`${ADDRESS_API}/${id}`, payload).then(response => {
        const { success } = response['data'];
        if (success) dispatch(getAddressListAction(customerId));
    });
};

export const getAddressAction = payload => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ADDRESS, payload: {} });
    return flevar.get(`${ADDRESS_API}/${payload}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_ADDRESS_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_ADDRESS_FAILURE, payload: response });
    });
};

export const getLocationAction = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_LOCATION, payload: [] });
    return flevar.get(LOCATION_LIST_API).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_LOCATION_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_LOCATION_FAILURE, payload: response });
    });
};

export const addPincodeAction = ({ pincode, location_id }) => dispatch => {
    localStorage.setItem(PINCODE, pincode);
    localStorage.setItem(LOCATION_ID, location_id);
    dispatch({ type: actionTypes.ADD_PINCODE, payload: pincode });
    dispatch(getProductListAction({
        filterkey: '',
        location_id: location_id
    }, { pageSize: 6 }));
    dispatch(getProductsAction({
        filterkey: '',
        location_id: location_id
    }));
}