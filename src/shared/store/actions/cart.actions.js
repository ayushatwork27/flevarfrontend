import { CART_API } from '../../constants/api-routes.constants';
import * as actionTypes from '../types/cart.types';
import { apiAction } from './api.actions';

// export const addToCart = (product) => async (dispatch) => {
//     try {
//         const { data } = await cartSave(product);
//         await dispatch({ type: actionTypes.ADD_TO_CART, payload: data['data']['data'] });
//     } catch (error) {
//         await dispatch({ type: actionTypes.ADD_TO_CART_FAIL, payload: error.response });
//     }
// };

// export const getCartAction = (id) => async (dispatch) => {
//     try {
//         const { data } = await getCart();
//         console.log('16',data);
//         await dispatch({ type: actionTypes.GET_CART, payload: id });
//     } catch (error) {
//         await dispatch({ type: actionTypes.GET_CART_FAIL, payload: error.response });
//     }
// };

// export const removeFromCart = (id) => async (dispatch) => {
//     try {
//         await dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
//     } catch (error) {
//         await dispatch({ type: actionTypes.REMOVE_FROM_CART_FAIL, payload: error.response });
//     }
// };

// export const updateCartCart = (id) => async (dispatch) => {
//     try {
//         await dispatch({ type: actionTypes.UPDATE_CART, payload: id });
//     } catch (error) {
//         await dispatch({ type: actionTypes.UPDATE_CART_FAIL, payload: error.response });
//     }
// };


export const addToCartAction = payload => {
    return apiAction({
        url: CART_API,
        method: 'POST',
        data: payload,
        onSuccess: addToCartSuccessAction,
        onFailure: addToCartFailureAction
    });
}

export const addToCartSuccessAction = payload => {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS,
        payload
    }
}

export const addToCartFailureAction = payload => {
    return {
        type: actionTypes.ADD_TO_CART_FAILURE,
        payload
    }
}

export const getCartAction = payload => {
    const cart_id = window && localStorage.getItem('cart_id');
    return apiAction({
        url: `${CART_API}/${cart_id}`,
        method: 'GET',
        data: null,
        onSuccess: getCartSuccessAction,
        onFailure: getCartFailureAction
    });
}

export const getCartSuccessAction = payload => {
    return {
        type: actionTypes.GET_CART_SUCCESS,
        payload: payload['data']['data']
    }
}

export const getCartFailureAction = payload => {
    return {
        type: actionTypes.GET_CART_FAILURE,
        payload
    }
}

export const deleteCartAction = payload => {
    return {
        type: actionTypes.DELETE_CART,
        payload
    }
}

export const deleteCartSuccessAction = payload => {
    return {
        type: actionTypes.DELETE_CART_SUCCESS,
        payload
    }
}

export const deleteCartFailureAction = payload => {
    return {
        type: actionTypes.DELETE_CART_FAILURE,
        payload
    }
}

export const deleteItemFromCartAction = payload => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART,
        payload
    }
}

export const deleteItemFromCartSuccessAction = payload => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART_SUCCESS,
        payload
    }
}

export const deleteItemFromCartFailureAction = payload => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART_FAILURE,
        payload
    }
}

export const updateCartAction = payload => {
    return {
        type: actionTypes.UPDATE_CART,
        payload
    }
}

export const updateCartSuccessAction = payload => {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        payload
    }
}

export const updateCartFailureAction = payload => {
    return {
        type: actionTypes.UPDATE_CART_FAILURE,
        payload
    }
}