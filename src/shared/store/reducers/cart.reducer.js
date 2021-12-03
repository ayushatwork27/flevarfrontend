import { ADDRESS_ID, CAKE_MSG, CART_ID, CART_TOKEN, COUPON_CODE, DELIVERY_DATE, DELIVERY_TIME_RANGE, SHIPMENT_PRICE, SHIPMENT_TYPE } from '../../constants/app.constants';
import * as actionTypes from '../types/cart.types';

const cart_id = localStorage.getItem(CART_ID);
const cart_token = localStorage.getItem(CART_TOKEN);
const cake_msg = localStorage.getItem(CAKE_MSG);
const coupon_code = localStorage.getItem(COUPON_CODE);
const address_id = localStorage.getItem(ADDRESS_ID);
const delivery_date = localStorage.getItem(DELIVERY_DATE);
const delivery_time_range = localStorage.getItem(DELIVERY_TIME_RANGE);
const shipment_type = localStorage.getItem(SHIPMENT_TYPE);
const shipment_price = localStorage.getItem(SHIPMENT_PRICE);

const initialState = {
    cartItems: [],
    cart_id: cart_id || '',
    cart_token: cart_token || '',
    coupon_code: coupon_code || '',
    address_id: address_id || '',
    message: cake_msg || '',
    delivery_date: delivery_date || '',
    delivery_time_range: delivery_time_range || '',
    shipment_type: shipment_type || '',
    shipment_price: shipment_price || ''
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            const item = action.payload;
            const existIndex = state.cartItems.findIndex(product => product.product_id === item.product_id);
            if (existIndex > -1) {
                state.cartItems[existIndex]['quantity'] = item.quantity;
                return state;
            }
            return { ...state, cartItems: [...state.cartItems, item] };
        case actionTypes.GET_CART_SUCCESS:
            return { ...state, cartItems: [action.payload] };
        case actionTypes.ADD_CAKE_MESSAGE:
            return { ...state, message: action.payload };
        case actionTypes.ADD_COUPON_CODE:
            return { ...state, coupon_code: action.payload };
        case actionTypes.ADD_ADDRESS_ID:
            return { ...state, address_id: action.payload };
        case actionTypes.ADD_DELIVERY_DATE:
            return { ...state, delivery_date: action.payload };
        case actionTypes.ADD_DELIVERY_TIME_RANGE:
            return { ...state, delivery_time_range: action.payload };
        case actionTypes.ADD_SHIPMENT_TYPE:
            return { ...state, shipment_type: action.payload };
        case actionTypes.ADD_SHIPMENT_PRICE:
            return { ...state, shipment_price: action.payload };
        case actionTypes.CLEAR_CART:
            return { ...state, cartItems: [], message: '', coupon_code: '', address_id: '', delivery_date: '', delivery_time_range: '', shipment_type: '', shipment_price: '' };
        case actionTypes.DELETE_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(item => item['cart_items'][0]['product_id'] !== action.payload) };
        default:
            return state;
    }
}