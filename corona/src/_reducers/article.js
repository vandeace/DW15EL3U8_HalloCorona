import { GET_ARTICLES } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducerArticle = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_ARTICLES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case `${GET_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerArticle;
