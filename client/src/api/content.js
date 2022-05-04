import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const postContentAPI = data => axios.post('/content', data);
export const getContentsAPI = () => axios.get('/contents');
export const getfilterContentsAPI = params =>
  axios.get('/contents/filter', { params });
export const getContentAPI = data => axios.get(`/content/${data}`);
export const solvedContentAPI = data => axios.patch(`/content/${data}/done`);
export const deleteContentAPI = data => axios.delete(`/content/${data}`);
export const editContentAPI = (contentId, data) =>
  axios.patch(`/content/${contentId}`, data);

export const getMoreContentsAPI = lastId =>
  axios.get(`/contents?lastId=${lastId}`);
