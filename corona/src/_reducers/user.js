import { GET_USER } from '../_store/action-types';

const initialState = {
  data: [],
  token: '',
  loading: false,
  error: false,
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case `SET_TOKEN`:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducerUser;
