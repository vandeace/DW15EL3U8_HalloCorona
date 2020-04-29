import { GET_ARTICLES, POST_ARTICLES } from '../_store/action-types';
import axios from 'axios';

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    payload: axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/article`,
    }),
  };
};

export const postArticles = (token, data) => {
  return {
    type: POST_ARTICLES,
    payload: axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: data,
      url: `http://localhost:5000/api/v1/article`,
    }),
  };
};
