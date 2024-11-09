import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://backendwhiskanddrizzle.dkdevops.online:4000/api",
    withCredentials: true,
});


 export default axiosInstance;
