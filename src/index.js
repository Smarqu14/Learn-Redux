import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { Provider } from 'react-redux';
// Store -> Globalized state

// Action Increment
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// // Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);
// // Display it on the console
// // This gets the state
// store.subscribe(() => console.log(store.getState()));

// // Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// //Dispatch tis action to the reducer, reduer checks what to do

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
