import axios from 'axios';

const url = 'http://3.140.144.29/api';

export const authenticateLogin = async (login) => {
    try {
        return await axios.post(`${url}/customer/sendotp`, login)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}