import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      <div className={classes.value}>{counter}</div>
      { toggleCounter && 
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increseHandler}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
