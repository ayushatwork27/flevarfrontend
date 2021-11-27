import axios from 'axios';

const url = 'http://3.140.144.29/api';

const options = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    }
};

export const authenticateLogin = async (login) => {
    try {
        return await axios.post(`${url}/customer/sendotp`, login, options);
    } catch (error) {
        console.log("error while calling login API: ", error);
    }
};

export const verifyOtpOnServer = async (loginData) => {
    try {
        return await axios.post(`${url}/customer/verifyotp`, loginData, options);
    } catch (error) {
        console.log("error while calling login API: ", error);
    }
};

export const cartSave = async (cart) => {
    try {
        return await axios.post(
            `${url}/customer/cart`,
            cart,
            options
        );
    } catch (error) {
        console.log("error while calling save cart API: ", error);
    }
};

export const updateCart = async (cart) => {
    const { cart_id, data } = cart;
    let cart_token = window && localStorage.getItem('cart_token');
    options['cart_token'] = cart_token;


    try {
        return await axios.put(
            `${url}/customer/cart${cart_id}`,
            data,
            options
        );
    } catch (error) {
        console.log("error while calling update cart API: ", error);
    }
};

export const getCart = async () => {
    let cart_token = window && localStorage.getItem('cart_token');
    if (cart_token) options['headers']['cart_token'] = cart_token;
    options['cart_token'] = cart_token;
    try {
        return await axios.get(
            `${url}/customer/cart/13`,
            options
        );
    } catch (error) {
        console.log("error while calling get cart API: ", error);
    }
};

export const deleteCart = async (cart) => {
    const { cart_id } = cart;
    let data = { cart_item_id: cart_id };
    try {
        return await axios.get(
            `${url}/customer/cart/${cart_id}`,
            data,
            options
        );
    } catch (error) {
        console.log("error while calling get cart API: ", error);
    }
};