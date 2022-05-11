import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const getAdminUserAPI = () => axios.get('/admin/user'); // 전체 유저 조회
export const deleteAdminUserAPI = data => axios.delete(`/admin/userId/${data}`); // 특정 유저 삭제
export const deleteAdminContentAPI = () => axios.delete('/admin/contentId'); // 특정 컨텐츠 삭제
