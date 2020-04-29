import { GET_CONSULTS, POST_CONSULTS } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const reducerConsultation = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CONSULTS}_PENDING`:
    case `${POST_CONSULTS}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_CONSULTS}_FULFILLED`:
    case `${POST_CONSULTS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
        success: true,
      };
    case `${GET_CONSULTS}_REJECTED`:
    case `${POST_CONSULTS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerConsultation;
