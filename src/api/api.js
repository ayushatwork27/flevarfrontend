import axios from 'axios';

const BASE_URL = 'http://3.140.144.29/api';

const instance = axios.create({
    baseURL: BASE_URL
});

if (typeof window !== "undefined") {
    instance.defaults.headers.common["Accept"] = "application/json";
    instance.defaults.headers.common["Content-Type"] = "application/json";
    instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}
export const userAuth = instance.defaults.headers.common["Authorization"];
export default instance;