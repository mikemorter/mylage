import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
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
      <div className="row">
        <div className="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
