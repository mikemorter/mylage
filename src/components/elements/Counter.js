import { React, useState } from "react";

const Counter = ({ title }) => {
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
        <div className="col align-items-center">
          <h1>{title}</h1>

          <span className="counter__output">{counter}</span>
          <br />
          <br />
          <div className="row justify-content-center">
            <button
              className="col-2 btn btn-outline-dark me-2"
              onClick={increase}
            >
              +
            </button>
            <button className="col-2 btn btn-outline-dark" onClick={decrease}>
              -
            </button>
          </div>
          <br />
          <div className="row justify-content-center">
            <button className="col-3 btn btn-outline-danger" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
