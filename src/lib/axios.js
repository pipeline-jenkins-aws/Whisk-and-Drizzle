import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:4000/api" : "http://100.27.195.186/api",
    withCredentials: true,
});


 export default axiosInstance;


