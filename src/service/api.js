import axios from 'axios';

const url = 'http://3.140.144.29/api';

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

export const authenticateLogin = async (login) => {
    try {
        return await axios.post(`${url}/customer/sendotp`, login, options)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const getProductsList = async () => {
    try {
        return await axios.post(`${url}/customer/product_list`, { filterkey: '', location_id: 2}, options)
    } catch (error) {
        console.log('error while calling product_list API: ', error);
    }
}