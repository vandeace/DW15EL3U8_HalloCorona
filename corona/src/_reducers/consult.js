import { GET_CONSULTS } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducerConsultation = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CONSULTS}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_CONSULTS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case `${GET_CONSULTS}_REJECTED`:
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
