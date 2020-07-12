import React from 'react';
import { Provider } from 'react-redux';
import Test from './component/Test';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
);

export default App;
