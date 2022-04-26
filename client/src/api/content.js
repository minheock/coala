import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const postContentAPI = data => axios.post('/content', data);
export const EditContentAPI = data => axios.patch('/content', data);
