import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import Carousel from "../elements/Carousel";
import Counter from "../elements/Counter";
import StateSelector from "../elements/StateSelector";
import Accordian from "../elements/Accordian";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="col">Home Page</p>
        <Counter />
      </div>
      <br />
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <Button value="Submit" color="primary" size="lg">
        Submit
      </Button>
      <StateSelector />
      <div>
        <Accordian />
      </div>
    </div>
  );
};

export default Home;
