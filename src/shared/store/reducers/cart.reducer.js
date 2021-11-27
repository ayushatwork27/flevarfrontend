import * as actionTypes from '../types/cart.types';

const initState = {
    cartItems: []
};

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existIndex = state.cartItems.findIndex(product => product.product_id === item.product_id);
            localStorage.setItem('cart_token', action.payload.cart_token);
            localStorage.setItem('cart_id', action.payload.id);
            if (existIndex > -1) {
                state.cartItems[existIndex]['quantity'] = item.quantity;
                return state;
            }
            return { ...state, cartItems: [...state.cartItems, item] };
        case actionTypes.GET_CART_SUCCESS:
            console.log(action);
            return { ...state, cartItems: [ ...state.cartItems, action.payload ] };
        case actionTypes.DELETE_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(item => item.product_id !== action.payload) };
        default:
            return state;
    }
}