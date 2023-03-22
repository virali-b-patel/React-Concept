import React, { useContext } from "react";
import { CountContext } from "./Components";

function ComponentOne() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component One - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentOne;
