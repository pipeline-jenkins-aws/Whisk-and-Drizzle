import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://100.27.195.186/api", // Always points to the production backend
    withCredentials: true, // Ensures cookies are sent with requests
});

export default axiosInstance;


