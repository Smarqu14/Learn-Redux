import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

function App() {
  // To get the state
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information I should see</h3> : ''}
    </div>
  );
}

export default App;
