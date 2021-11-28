import * as actionTypes from '../constants/productConstant';

const initState = {
    products: [],
    categories: [],
    product: {},
    loading: true
};

export const getProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload, loading: false }
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false }
        case actionTypes.GET_CATEGORIES_FAIL:
            return { error: action.payload, loading: false }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, product: action.payload.data.data, loading: false }
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state
    }
};