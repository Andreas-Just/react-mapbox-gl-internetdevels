import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import thunk from 'redux-thunk';

import loadingReducer from './loading';
import todosReducer from './todos';

const rootReducer = combineReducers({
  loading: loadingReducer,
  todos: todosReducer,
});

export const getLoading = state => state.loading.loading;
export const getLoaded = state => state.loading.loaded;
export const getError = state => state.loading.error;
export const getTodos = state => state.todos;

export const getPage = state => state.pagination.page;
export const getPerPage = state => state.pagination.perPage;

export const getVisibleTodos = createSelector(
  getTodos, getPage, getPerPage,

  (todos, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = page * perPage;

    return todos.slice(start, end);
  },
);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('map', JSON.stringify(store.getState()));
});

export default store;
