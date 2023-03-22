import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increase Five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrease Five
      </button>
      <div>
        <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
          Increase Counter Two
        </button>
        <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
          Decrease Counter Two
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
