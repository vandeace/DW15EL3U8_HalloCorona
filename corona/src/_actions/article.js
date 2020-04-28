import { GET_ARTICLES } from '../_store/action-types';
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
