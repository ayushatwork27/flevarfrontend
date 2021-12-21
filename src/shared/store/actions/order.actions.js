import * as actionTypes from '../types/order.types';
import flevar from '../../../api/api';
import { CANCEL_ORDER_API, ORDER_API, ORDER_DETAIL_API, PLACE_ORDER_API, VERIFY_ORDER_API } from '../../constants/api-routes.constants';

export const verifyOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.VERIFY_ORDER, payload });
    return flevar.post(VERIFY_ORDER_API, payload).then(response => {
        return response;
    });
}

export const placeOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.PLACE_ORDER, payload });
    return flevar.post(PLACE_ORDER_API, payload).then(response => {
        return response;
    });
}

export const getOrdersListAction = payload => dispatch => {
    dispatch({ type: actionTypes.GET_ORDER_LIST, payload });
    return flevar.get(`${ORDER_API}?page=2`).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.GET_ORDER_LIST_SUCCESS, payload: data['data'] });
    });
}

export const getOrderDetailAction = order_id => dispatch => {
    dispatch({ type: actionTypes.GET_ORDER_DETAIL, order_id });
    return flevar.get(`${ORDER_DETAIL_API}/${order_id}`).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.GET_ORDER_DETAIL_SUCCESS, payload: data['data'] });
    });
}

export const cancelOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.CANCEL_ORDER, payload });
    return flevar.post(CANCEL_ORDER_API, payload).then(response => {
        return response;
    });
}