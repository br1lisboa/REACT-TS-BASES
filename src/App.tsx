import { Counter } from "./bases/Counter";
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";


function App() {
  return (
    <>
      <Counter initialValue={5} />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
    </>
  );
}

export default App;
