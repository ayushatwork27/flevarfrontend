import axios from "axios";
import { API } from "../shared/store/types/auth.types";
import { accessDenied, apiError, apiStart, apiEnd } from "../shared/store/actions/api.actions";
import { CART_TOKEN, FLEVAR_USER } from '../shared/constants/app.constants';
// import { setLoadingAction } from "../shared/store/actions/app.action";

const apiMiddleware = ({ dispatch }) => next => async action => {
    next(action);

    if (action.type !== API) return;

    const {
        url,
        method,
        data,
        cartToken,
        onSuccess,
        onFailure,
        headers
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";


    // axios default configs
    // const user = window && localStorage.getItem(FLEVAR_USER);
    const cart_token = window && localStorage.getItem(CART_TOKEN);

    axios.defaults.baseURL = 'http://3.140.144.29/api' || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    // axios.defaults.headers.common["token"] = `${accessToken || (user && JSON.parse(user).token)}`;
    if (cartToken || cart_token) axios.defaults.headers.common["cart_token"] = `${cartToken || cart_token}`;


    // if (label) dispatch(apiStart(label));

    try {
        const request = await axios.request({
            url,
            method,
            headers,
            [dataOrParams]: data
        });
        dispatch(onSuccess(request.data));
        // dispatch(setLoadingAction(false));
    } catch (error) {
        dispatch(apiError(error));
        // dispatch(setLoadingAction(false));
        dispatch(onFailure(error));
        if (error.response && error.response.status === 403) {
            dispatch(accessDenied(window.location.pathname));
        }
    } finally {
        // if (label) {
        //     dispatch(apiEnd(label));
        // }
    }
};

export default apiMiddleware;