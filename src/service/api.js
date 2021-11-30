import axios from 'axios';

const url = 'http://3.140.144.29/api/customer';

const options = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    }
};

const getHeader = (token) => {
    const options = {
        headers: {
            "Authorization": "Bearer " + token,
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }
    }
    return options;
}

export const authenticateLogin = async (login) => {
    try {
        return await axios.post(`${url}/sendotp`, login, options);
    } catch (error) {
        console.log("error while calling login API: ", error);
    }
};

export const verifyOtpOnServer = async (otp, mobile) => {
    try {
        return await axios.post(`${url}/verifyotp`, { otp, mobile }, options);
    } catch (error) {
        console.log("error while calling otp API: ", error);
    }
};

export const authenticateOTP = async (loginData) => {
    try {
        return await axios.post(`${url}/sendotp`, loginData, options);
    } catch (error) {
        console.log("error while calling verify otp API: ", error);
    }
};

export const getProductsList = async () => {
    try {
        return await axios.post(`${url}/product_list`, { filterkey: "", location_id: 2 }, options);
    } catch (error) {
        console.log("error while calling product list API: ", error);
    }
};

export const getCategoriesList = async () => {
    try {
        return await axios.get(`${url}/product_categories`, options);
    } catch (error) {
        console.log("error while calling category list API: ", error);
    }
};

export const getCustomerProfile = async (token) => {
    try {
        return await axios.get(`${url}/profile`, getHeader(token));
    } catch (error) {
        console.log("error while calling customer profile API: ", error);
    }
};

export const getProductDetails = async (id) => {
    try {
        return await axios.get(`${url}/product_details/${id}`, options);
    } catch (error) {
        console.log("error while calling product details API: ", error);
    }
};

export const cartSave = async (cart) => {
    try {
        return await axios.post(`${url}/cart`, cart, options);
    } catch (error) {
        console.log("error while calling cart save API: ", error);
    }
};

export const getUserAddresses = async (id) => {
    try {
        return await axios.get(`${url}/address_listing/${id}`, options);
    } catch (error) {
        console.log("error while calling addresses list API: ", error);
    }
};

export const addressSave = async (address) => {
    try {
        return await axios.post(`${url}/address`, address, options);
    } catch (error) {
        console.log("error while calling address save API: ", error);
    }
};

export const addressUpdate = async (address, id) => {
    try {
        return await axios.post(`${url}/address/${id}`, address, options);
    } catch (error) {
        console.log("error while calling address update API: ", error);
    }
};

export const getAdress = async (id) => {
    try {
        return await axios.get(`${url}/address/${id}`, options);
    } catch (error) {
        console.log("error while calling adress API: ", error);
    }
};
