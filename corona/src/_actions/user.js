import { GET_USER } from '../_store/action-types';
import axios from 'axios';

export const getUsers = (token) => {
  return {
    type: GET_USER,
    payload: axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `http://localhost:5000/api/v1/user`,
    }),
  };
};

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};
