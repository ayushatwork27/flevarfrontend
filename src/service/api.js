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