import { React, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4 align-items-center">
          <h1>Counter</h1>

          <span className="counter__output">{counter}</span>
          <br />
          <div className="btn__container">
            <button className="btn btn-outline-dark" onClick={increase}>
              +
            </button>

            <button className="btn btn-outline-dark" onClick={decrease}>
              -
            </button>
            <br />
          </div>
          <div>
            <button className="btn btn-outline-danger" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
