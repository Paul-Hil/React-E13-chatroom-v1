import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/chat';

import authMiddleware from '../middlewares/authMiddleware';

const enhancer = composeWithDevTools (
  applyMiddleware(
    authMiddleware,
  )
)

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
