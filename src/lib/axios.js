import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://backendwhiskanddrizzle.dkdevops.online/api",
    withCredentials: true,
});


 export default axiosInstance;
