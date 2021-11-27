import * as actionTypes from '../types/product.types';

export const productReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_LIST_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCT_LIST_FAILURE:
            return { error: action.payload }
        default:
            return state
    }
};

export const productDetailReducer = (state = {product: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { product: action.payload.data.data }
        case actionTypes.GET_PRODUCT_DETAIL_FAILURE:
            return { error: action.payload }
        default:
            return state
    }
};