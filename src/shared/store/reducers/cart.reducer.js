import * as actionTypes from '../types/cart.types';

const cart_id = localStorage.getItem('cart_id');
const cart_token = localStorage.getItem('cart_token');
const cake_msg = localStorage.getItem('cake_msg');
const initialState = {
    cartItems: [],
    cart_id: cart_id || undefined,
    cart_token: cart_token || undefined,
    coupon_code: undefined,
    address_id: undefined,
    message: cake_msg || undefined
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
        case actionTypes.ADD_CAKE_MESSAGE_SUCCESS:
            return { ...state, message: action.payload };
        case actionTypes.DELETE_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(item => item['cart_items'][0]['product_id'] !== action.payload) };
        default:
            return state;
    }
}