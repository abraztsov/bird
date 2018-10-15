import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

let _compose = compose;

if (process.env.NODE_ENV !== 'production') {
  _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = _compose(applyMiddleware(thunkMiddleware));

export const store = createStore(reducers, enhancer);
