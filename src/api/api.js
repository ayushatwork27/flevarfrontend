import axios from "axios";

const BASE_URL = "http://3.140.144.29/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

const authToken = localStorage.getItem("token");
if (typeof window !== "undefined") {
  instance.defaults.headers.common["Accept"] = "application/json";
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  if (authToken)
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
}
export const userAuth = instance.defaults.headers.common["Authorization"];
export default instance;
