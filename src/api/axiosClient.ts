import axios from "axios";
const getToken = () => {
  const token = localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : "";
  return token ? JSON.parse(token) : "";
};
// const BASE_URL = "https://wyvernp-portfolio.azurewebsites.net";
//const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://localhost:7137";
const BASE_URL = "https://server.wyvernp.tech";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getToken().accessToken}`,
  },
});
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
);
export default axiosClient;
