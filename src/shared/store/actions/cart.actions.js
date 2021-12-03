import { CART_API, CART_ITEM_SAVE_API } from '../../constants/api-routes.constants';
import { ADDRESS_ID, CAKE_MSG, CART_ID, CART_TOKEN, COUPON_CODE, DELIVERY_DATE, DELIVERY_TIME_RANGE, SHIPMENT_PRICE, SHIPMENT_TYPE } from '../../constants/app.constants';
import * as actionTypes from '../types/cart.types';
import flevar from '../../../api/api';

export const addToCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload });
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = { headers: { 'cart_token': cart_token } }
    return flevar.post(CART_ITEM_SAVE_API, payload, options).then(response => {
        const { cart_token, id } = response['data']['data']['data'];
        localStorage.setItem(CART_TOKEN, cart_token);
        localStorage.setItem(CART_ID, id);
        if (response['data']['success']) dispatch(getCartAction());
    });
}

export const getCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.GET_CART, payload });
    const cart_id = window && localStorage.getItem(CART_ID);
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = { headers: { 'cart_token': cart_token } };
    const params = { cart_token };
    return flevar.post(`${CART_API}/${cart_id}`, params, options).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_CART_SUCCESS, payload: data['data'] });
    });
}

export const deleteItemFromCartAction = id => dispatch => {
    dispatch({ type: actionTypes.DELETE_ITEM_FROM_CART, payload: undefined });
    const cart_id = window && localStorage.getItem(CART_ID);
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = {
        headers: { 'cart_token': cart_token },
        data: { cart_item_id: id }
    };
    return flevar.delete(`${CART_ITEM_SAVE_API}/${cart_id}`, options).then(response => {
        const { success } = response['data'];
        if (success) dispatch(getCartAction());
    });
}

export const updateCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.UPDATE_CART, payload });
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const cart_id = window && localStorage.getItem(CART_ID);
    payload['cart_token'] = cart_token;
    return flevar.post(`${CART_ITEM_SAVE_API}/${cart_id}`, payload).then(response => {
        if (response['data']['success']) dispatch(getCartAction());
    });
}

export const addCakeMessageAction = payload => dispatch => {
    localStorage.setItem(CAKE_MSG, payload);
    dispatch({ type: actionTypes.ADD_CAKE_MESSAGE, payload });
}

export const addCouponCodeAction = payload => dispatch => {
    localStorage.setItem(COUPON_CODE, payload);
    dispatch({ type: actionTypes.ADD_COUPON_CODE, payload });
}

export const addAddressIdAction = payload => dispatch => {
    localStorage.setItem(ADDRESS_ID, payload);
    dispatch({ type: actionTypes.ADD_ADDRESS_ID, payload });
}

export const addDeliveryDateAction = payload => dispatch => {
    localStorage.setItem(DELIVERY_DATE, payload);
    dispatch({ type: actionTypes.ADD_DELIVERY_DATE, payload });
}

export const addDeliveryTimeRangeAction = payload => dispatch => {
    localStorage.setItem(DELIVERY_TIME_RANGE, payload);
    dispatch({ type: actionTypes.ADD_DELIVERY_TIME_RANGE, payload });
}

export const addShipmentTypeAction = payload => dispatch => {
    localStorage.setItem(SHIPMENT_TYPE, payload);
    dispatch({ type: actionTypes.ADD_SHIPMENT_TYPE, payload });
}

export const addShipmentPriceAction = payload => dispatch => {
    localStorage.setItem(SHIPMENT_PRICE, payload);
    dispatch({ type: actionTypes.ADD_SHIPMENT_PRICE, payload });
}

export const clearCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.CLEAR_CART, payload });
}