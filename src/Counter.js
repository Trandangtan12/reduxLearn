import { useSelector, useDispatch } from "react-redux";
import { decrement, increase, increment, toggle } from "./slice/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      {show && <div>Counter : {counter}</div>}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(toggle())}>
        Show/hide Counter
      </button>
      <button onClick={() => dispatch(increase(10))}>
        Increase
      </button>
    </div>
  );
};
export default Counter;