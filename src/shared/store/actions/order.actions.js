import * as actionTypes from '../types/order.types';
import flevar from '../../../api/api';
import { CANCEL_ORDER_API, ORDER_API, ORDER_DETAIL_API, PLACE_ORDER_API, VERIFY_ORDER_API } from '../../constants/api-routes.constants';

export const verifyOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.VERIFY_ORDER, payload });
    return flevar.post(VERIFY_ORDER_API, payload).then(response => {
        console.log(response);
        return response;
    });
}

export const placeOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.PLACE_ORDER, payload });
    return flevar.post(PLACE_ORDER_API, payload).then(response => {
        console.log(response);
        return response;
    });
}

export const getOrdersListAction = payload => dispatch => {
    dispatch({ type: actionTypes.GET_ORDER_LIST, payload });
    return flevar.post(ORDER_API).then(response => {
        console.log(response);
        return response;
    });
}

export const getOrderDetailAction = payload => dispatch => {
    dispatch({ type: actionTypes.GET_ORDER_DETAIL, payload });
    return flevar.get(ORDER_DETAIL_API).then(response => {
        console.log(response);
        return response;
    });
}

export const cancelOrderAction = payload => dispatch => {
    dispatch({ type: actionTypes.CANCEL_ORDER, payload });
    return flevar.post(CANCEL_ORDER_API, payload).then(response => {
        console.log(response);
        return response;
    });
}