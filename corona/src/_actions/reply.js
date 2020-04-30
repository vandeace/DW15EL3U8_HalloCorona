import { GET_REPLY } from '../_store/action-types';
import axios from 'axios';

export const getReply = (token) => {
  return {
    type: GET_REPLY,
    payload: axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `http://localhost:5000/api/v1//reply`,
    }),
  };
};
