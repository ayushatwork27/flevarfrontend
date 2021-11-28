import * as actionTypes from '../types/product.types';
import flevar from '../../../api/api';
import { PRODUCT_DETAIL_API, PRODUCT_LIST_API } from '../../constants/api-routes.constants';

export const getProductListAction = () => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCT_LIST, payload: undefined });
    const params = {
        "filterkey": "",
        "location_id": 2

    };
    return flevar.post(PRODUCT_LIST_API, params).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCT_LIST_SUCCESS, payload: data['data'] });
    });
}

export const getProductDetailAction = product_id => dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL, payload: undefined });
    return flevar.get(`${PRODUCT_DETAIL_API}/${product_id}`, null).then(response => {
        const { success, data } = response['data'];
        if (success) dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data['data'] });
    });
}