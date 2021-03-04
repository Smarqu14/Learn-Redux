import rootReducers from '../reducer/index';
import { createStore } from 'redux';

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ +
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
