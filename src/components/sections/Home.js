import React from "react";
import Button from "../elements/Button";
import Carousel from "../elements/Carousel";
import Counter from "../elements/Counter";
import StateSelector from "../elements/StateSelector";
import Accordian from "../elements/Accordian";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="col">Home</p>
        <div className="row">

        </div>
      </div>
      <br />
      <div>
        <Carousel />
      </div>
      <br />
      <div>
        <Button value="Submit" color="primary" size="lg">
          Submit
        </Button>
      </div>
      <br />
      <div>
        <StateSelector />
      </div>

      <div className="col-4">
        <Accordian />
      </div>
    </div>
  );
};

export default Home;
