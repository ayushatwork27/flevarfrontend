import { CART_API } from '../../constants/api-routes.constants';
import { CART_TOKEN } from '../../constants/app.constants';
import * as actionTypes from '../types/cart.types';
import flevar from '../../../api/api';

export const addToCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload });
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = { headers: { 'cart_token': cart_token } }
    return flevar.post(CART_API, payload, options).then(response => {
        const { cart_token, id } = response['data']['data']['data'];
        localStorage.setItem(CART_TOKEN, cart_token);
        localStorage.setItem('cart_id', id);
        if (response['data']['success']) dispatch(getCartAction());
    });
}

export const getCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.GET_CART, payload });
    const cart_id = window && localStorage.getItem('cart_id');
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = { headers: { 'cart_token': cart_token } };
    return flevar.post(`${CART_API}/${cart_id}`, { 'cart_token': cart_token }, options).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_CART_SUCCESS, payload: data['data'] });
    });
}

export const deleteItemFromCartAction = id => dispatch => {
    dispatch({ type: actionTypes.DELETE_ITEM_FROM_CART, payload: undefined });
    const cart_id = window && localStorage.getItem('cart_id');
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = {
        headers: { 'cart_token': cart_token },
        data: { cart_item_id: id }
    };
    return flevar.delete(`${CART_API}/${cart_id}`, options).then(response => {
        const { success } = response['data'];
        if (success) dispatch(getCartAction());
    });
}

export const updateCartAction = payload => dispatch => {
    dispatch({ type: actionTypes.UPDATE_CART, payload });
    const cart_id = window && localStorage.getItem('cart_id');
    const cart_token = window && localStorage.getItem(CART_TOKEN);
    const options = { headers: { 'cart_token': cart_token } };
    return flevar.post(`${CART_API}/${cart_id}`, payload, options).then(response => { });
}