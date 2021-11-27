import * as actionTypes from '../types/product.types';
import { apiAction } from './api.actions';
import { PRODUCT_DETAIL_API, PRODUCT_LIST_API } from '../../constants/api-routes.constants';

export const getProductListAction = () => {
    return apiAction({
        url: PRODUCT_LIST_API,
        method: 'POST',
        data: {
            "filterkey": "",
            "location_id": 2
        },
        onSuccess: getProductListSuccessAction,
        onFailure: getProductListFailureAction
    });
}

const getProductListSuccessAction = payload => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_SUCCESS,
        payload: payload['data']['data']
    };
}

const getProductListFailureAction = payload => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_FAILURE,
        payload
    };
}

export const getProductDetailAction = product_id => {
    return apiAction({
        url: `${PRODUCT_DETAIL_API}/${product_id}`,
        method: 'GET',
        data: null,
        onSuccess: getProductDetailSuccessAction,
        onFailure: getProductDetailFailureAction
    });
}

const getProductDetailSuccessAction = payload => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
        payload
    };
}

const getProductDetailFailureAction = payload => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_FAILURE,
        payload
    };
}