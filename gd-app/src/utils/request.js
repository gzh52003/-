import axios from 'axios';
const request = axios.create({
    // baseURL:process.env.NODE_ENV==='production'?'':'http://localhost:3003/api',
    baseURL:'http://localhost:3003/api',
    withCredentials:true
})
export default request;