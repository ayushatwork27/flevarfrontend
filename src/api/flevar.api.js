import axios from "axios";
import { CART_TOKEN, FLEVAR_USER } from '../shared/constants/app.constants';

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

    axios.defaults.baseURL = 'http://3.140.144.29/api' || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    // axios.defaults.headers.common["token"] = `${accessToken || (user && JSON.parse(user).token)}`;
    if (cartToken) axios.defaults.headers.common["cart_token"] = cartToken;

    try {
        const request = await axios.request({
            url,
            method,
            headers,
            [dataOrParams]: data
        });
        dispatch(onSuccess(request.data));
    } catch (error) {
        if (error.response && error.response.status === 403) { }
    } finally { }
};

export default apiMiddleware;