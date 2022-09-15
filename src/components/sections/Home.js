import React from "react";
import Button from "../elements/Button";
import Counter from "../elements/Counter";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="col">Home Page</p>
        <Button value="Submit" color="primary" size="lg">
          Submit
        </Button>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
