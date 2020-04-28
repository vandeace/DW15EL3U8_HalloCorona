import { GET_CONSULTS } from '../_store/action-types';
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
