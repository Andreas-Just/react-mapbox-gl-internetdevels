import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import loadingReducer from './loading';
import headingReducer from './heading';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  heading: headingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('map', JSON.stringify(store.getState()));
});

export default store;
