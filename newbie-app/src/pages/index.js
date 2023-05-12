import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/feature/counter";
import Home from "./firstpage";
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increment
      </button>
      <p>{count}</p>
      {/* <Home/> */}
    </div>
  );
};
export default App;
