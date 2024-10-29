import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://100.27.195.186/api", // Always points to production backend
    withCredentials: true,
});

export default axiosInstance;
