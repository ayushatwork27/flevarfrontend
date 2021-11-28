import * as actionTypes from '../types/product.types';

const initialState = {
    productList: [],
    productDetail: undefined
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_LIST_SUCCESS:
            return { ...state, productList: action.payload };
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, productDetail: action.payload };
        default:
            return state;
    }
};