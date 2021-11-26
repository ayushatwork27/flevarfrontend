import * as actionTypes from '../constants/cartConstant';

export const addToCart = (product) => async (dispatch) => {
    try {
        await dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: product });
    } catch (error) {
        await dispatch({ type: actionTypes.ADD_TO_CART_FAIL, payload: error.response });
    }
};

export const removeFromCart = (id) => async (dispatch) => {
    try {
        await dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: id });
    } catch (error) {
        await dispatch({ type: actionTypes.REMOVE_FROM_CART_FAIL, payload: error.response });
    }
};
