import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:4000/api" : "http://3.80.74.141/api",
    withCredentials: true,
});


 export default axiosInstance;