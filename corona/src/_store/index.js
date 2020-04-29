import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger, promise } from './middleware';
import reducerArticle from '../_reducers/article';
import reducerUser from '../_reducers/user';
import reducerConsultation from '../_reducers/consult';
const rootReducer = combineReducers({
  article: reducerArticle,
  user: reducerUser,
  consultation: reducerConsultation,
});

const store = createStore(rootReducer, applyMiddleware(logger, promise));

export default store;
