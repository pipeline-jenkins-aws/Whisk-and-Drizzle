import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://100.27.195.186/api" : "/api",
    withCredentials: true,
});


 export default axiosInstance;


