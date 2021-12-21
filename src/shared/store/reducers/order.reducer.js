import * as actionTypes from '../types/order.types';

const initialState = {
    orderList: [],
    orderDetail: {}
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDER_LIST_SUCCESS:
            return { ...state, orderList: action.payload };
        case actionTypes.GET_ORDER_DETAIL_SUCCESS:
            return { ...state, orderDetail: action.payload };
        default:
            return state;
    }
}