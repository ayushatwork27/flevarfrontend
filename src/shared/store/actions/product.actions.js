import * as actionTypes from '../types/product.types';
import flevar from '../../../api/api';
import { PRODUCT_DETAIL_API, PRODUCT_LIST_API, PRODUCT_CATEGORIES_API, PRODUCT_REVIEW_LIST_API, PRODUCT_REVIEW_API } from '../../constants/api-routes.constants';

export const getProductListAction = (params, query) => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCT_LIST, payload: undefined });
    const uri = `${PRODUCT_LIST_API}?pageSize=${query.pageSize}`;
    return flevar.post(uri, params).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCT_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_PRODUCT_LIST_FAILURE, payload: response });
    });
}

export const getProductsAction = params => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCTS, payload: undefined });
    return flevar.post(PRODUCT_LIST_API, params).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: response });
    });
}

export const getCategoryProductListAction = params => dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORY_PRODUCT_LIST, payload: undefined });
    return flevar.post(PRODUCT_LIST_API, params).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_CATEGORY_PRODUCT_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_CATEGORY_PRODUCT_LIST_FAILURE, payload: response });
    });
}

export const getCategoryListAction = query => dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORY_LIST, payload: undefined });
    const uri = `${PRODUCT_CATEGORIES_API}?pageSize=${query.pageSize}`;
    return flevar.get(uri).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_CATEGORY_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_CATEGORY_LIST_FAILURE, payload: response });
    });
}

export const getCategoriesAction = () => dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORIES, payload: undefined });
    return flevar.get(PRODUCT_CATEGORIES_API).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_CATEGORIES_FAILURE, payload: response });
    });
}

export const getProductDetailAction = product_id => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL, payload: undefined });
    return flevar.get(`${PRODUCT_DETAIL_API}/${product_id}`, null).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAILURE, payload: response });
    });
}

export const getProductReviewsAction = id => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCT_REVIEW_LIST, payload: undefined });
    return flevar.get(`${PRODUCT_REVIEW_LIST_API}/${id}`).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCT_REVIEW_LIST_SUCCESS, payload: data['data'] });
        else dispatch({ type: actionTypes.GET_PRODUCT_REVIEW_LIST_FAILURE, payload: response });
    });
}

export const addProductReviewAction = product => dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCT_REVIEW, payload: undefined });
    return flevar.post(PRODUCT_REVIEW_API, product).then(response => {
        const { success } = response['data'];
        if (success) dispatch(getProductReviewsAction(product.product_id));
        else dispatch({ type: actionTypes.ADD_PRODUCT_REVIEW_FAILURE, payload: response });
    });
}