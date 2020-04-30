import { GET_REPLY } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const reducerReply = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_REPLY}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_REPLY}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
        success: true,
      };
    case `${GET_REPLY}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerReply;
