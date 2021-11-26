import * as actionTypes from '../constants/cartConstant';

const initState = {
    cartItems: []
};

export const getCartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            const item = action.payload;
            const existIndex = state.cartItems.findIndex(product => product.product_id === item.product_id);
            if (existIndex > -1) {
                state.cartItems[existIndex]['quantity'] = item.quantity;
                return state;
            }
            return { ...state, cartItems: [...state.cartItems, item] };
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            return { ...state, cartItems: state.cartItems.filter(item => item.product_id !== action.payload) };
        default:
            return state;
    }
}