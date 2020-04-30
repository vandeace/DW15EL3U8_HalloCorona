import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger, promise } from './middleware';
import reducerArticle from '../_reducers/article';
import reducerUser from '../_reducers/user';
import reducerConsultation from '../_reducers/consult';
import reducerReply from '../_reducers/reply';
const rootReducer = combineReducers({
  article: reducerArticle,
  user: reducerUser,
  consultation: reducerConsultation,
  reply: reducerReply,
});

const store = createStore(rootReducer, applyMiddleware(logger, promise));

export default store;
