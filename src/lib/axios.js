import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://54.226.214.191/api",
    withCredentials: true,
});


 export default axiosInstance;
