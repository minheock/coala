import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const postContentAPI = data => axios.post('/content', data);
export const getContentsAPI = () => axios.get('/contents');
export const getContentsUserAPI = () => axios.get(`/contents/mypost`);

export const getfilterContentsAPI = params =>
  axios.get('/contents/filter', { params });

export const getContentAPI = data => axios.get(`/content/${data}`);

export const editContentAPI = data => axios.patch(`/content/edit`, data);

export const getMoreContentsAPI = async lastId => {
  const response = await axios.get(`/contents?lastId=${lastId}`);
  const items = response.data.data;
  return {
    items,
    nextPage: items.length === 0 ? undefined : items[items.length - 1].id,
    isLast: items.length < 8,
  };
};

export const getMoreSolvingContentsAPI = async lastId => {
  const response = await axios.get(`/contents/filter?done=0&lastId=${lastId}`);
  const items = response.data.data;
  return {
    items,
    nextPage: items.length === 0 ? undefined : items[items.length - 1].id,
    isLast: items.length === 0,
  };
};

export const getMoreSolvedContentsAPI = async lastId => {
  const response = await axios.get(`/contents/filter?done=1&lastId=${lastId}`);
  const items = response.data.data;
  return {
    items,
    nextPage: items.length === 0 ? undefined : items[items.length - 1].id,
    isLast: items.length === 0,
  };
};

export const getMoreStackContentsAPI = async (stack, lastId) => {
  const response = await axios.get(
    `/contents/filter?stack=${stack}&lastId=${lastId}`,
  );
  const items = response.data.data;
  return {
    items,
    nextPage: items.length === 0 ? undefined : items[items.length - 1].id,
    isLast: items.length === 0,
  };
};

export const solvedContentAPI = data => axios.patch(`/content/${data}/done`);

export const deleteContentAPI = data => axios.delete(`/content/${data}`);

export const commentContentAPI = data => axios.post('/content/comment', data);
export const likeAPI = data => axios.patch(`/content/like`, data);
export const unLikeAPI = data => axios.patch(`/content/unlike`, data);
