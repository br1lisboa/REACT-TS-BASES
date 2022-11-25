import { useReducer } from 'react';
import { doIncrease, doReset } from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

const INITAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {

  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducer, INITAL_STATE)

  const handleReset = () => {
    dispatch(doReset())
  }

  const increaseBy = (value: number) => {
    dispatch(doIncrease(value))
  }

  return (
    <>
      <h1>CounterReducerComponent - Segmentado</h1>

      <div>
        Counter: {counter}

        Previous: {previous}

        Changes: {changes}
      </div>

      <button onClick={handleReset}>
        Reset
      </button>
      <button onClick={() => increaseBy(1)}>
        +1
      </button>
      <button onClick={() => increaseBy(5)}>
        +5
      </button>
      <button onClick={() => increaseBy(10)}>
        +10
      </button>
    </>
  )
}
