import {
  START_LOADING,
  SET_LOADED,
  SET_ERROR,
  FINISH_LOADING,
} from '../constants/actionTypes';

export const startLoading = () => ({
  type: START_LOADING,
});
export const finishLoading = () => ({
  type: FINISH_LOADING,
});
export const setLoaded = () => ({
  type: SET_LOADED,
});
export const setError = (error = '') => ({
  type: SET_ERROR,
  error,
});

const initialState = {
  loading: false,
  loaded: false,
  error: '',
};

const reduce = (loadingState = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...loadingState, loading: true };
    case SET_LOADED:
      return { ...loadingState, loaded: true };
    case SET_ERROR:
      return { ...loadingState, error: action.error };
    case FINISH_LOADING:
      return { ...loadingState, loading: false };
    default:
      return loadingState;
  }
};

export default reduce;
