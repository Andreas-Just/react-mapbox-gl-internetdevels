import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import loadingReducer from './loading';
import locationReducer from './location';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  location: locationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('map', JSON.stringify(store.getState()));
});

export default store;
