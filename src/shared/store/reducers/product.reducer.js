import * as actionTypes from '../types/product.types';

const initialState = {
    productList: [],
    productReviewList: [],
    categoryList: [],
    products: [],
    categories: [],
    categoryProductList: [],
    productDetail: {}
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_LIST_SUCCESS:
            return { ...state, productList: action.payload };
        case actionTypes.GET_PRODUCT_REVIEW_LIST_SUCCESS:
            return { ...state, productReviewList: action.payload };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };
        case actionTypes.GET_CATEGORY_PRODUCT_LIST_SUCCESS:
            return { ...state, categoryProductList: action.payload };
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, productDetail: action.payload };
        case actionTypes.GET_CATEGORY_LIST_SUCCESS:
            return { ...state, categoryList: action.payload };
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};