import axios from 'axios';
import { FLEVAR_USER } from '../shared/constants/app.constants';

const BASE_URL = 'http://3.140.144.29/api';

const instance = axios.create({
    baseURL: BASE_URL
});

if (typeof window !== "undefined") {
    const user = localStorage.getItem(FLEVAR_USER);
    instance.defaults.headers.common["Accept"] = "application/json";
    instance.defaults.headers.common["Content-Type"] = "application/json";
    instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    if (user) instance.defaults.headers.common["Authorization"] = JSON.parse(user).BEARER_TOKEN;

}
export const userAuth = instance.defaults.headers.common["Authorization"];
export default instance;