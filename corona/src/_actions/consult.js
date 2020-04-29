import { GET_CONSULTS, POST_CONSULTS } from '../_store/action-types';
import axios from 'axios';

export const getConsult = (token) => {
  return {
    type: GET_CONSULTS,
    payload: axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `http://localhost:5000/api/v1/index`,
    }),
  };
};

export const postConsult = (token, data) => {
  return {
    type: POST_CONSULTS,
    payload: axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: data,
      url: `http://localhost:5000/api/v1/consultation`,
    }),
  };
};
