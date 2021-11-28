import * as actionTypes from '../types/cart.types';

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existIndex = state.cartItems.findIndex(product => product.product_id === item.product_id);
            if (existIndex > -1) {
                state.cartItems[existIndex]['quantity'] = item.quantity;
                return state;
            }
            return { ...state, cartItems: [...state.cartItems, item] };
        case actionTypes.GET_CART_SUCCESS:
            return { ...state, cartItems: [ action.payload ] };
        case actionTypes.DELETE_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(item => item['cart_items'][0]['product_id'] !== action.payload) };
        default:
            return state;
    }
}