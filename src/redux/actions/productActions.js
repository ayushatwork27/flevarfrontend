import * as actionTypes from '../constants/productConstant';
import { getProductsList, getProductDetails } from "../../service/api";

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await getProductsList();
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetail = (id) => async (dispatch) => {
    try {
        const { data } = await getProductDetails(id);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
    }
};