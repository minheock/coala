import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const getuserAPI = () => axios.get('/user/auth');
export const signupAPI = data => axios.post('/user/signup', data);
export const loginAPI = data => axios.post('/user/login', data);
export const logoutAPI = () => axios.post('/user/logout');
export const edituserAPI = data => axios.patch('/user/userInfo', data);
export const editpasswordAPI = data => axios.patch('/user/password', data);
