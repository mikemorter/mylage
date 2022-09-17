import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import Carousel from "../elements/Carousel";
import Counter from "../elements/Counter";

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
          <div className="col">
            <Card
              banner="Card 1"
              title="First Title"
              content="We are going to have a great day"
              button="Let's Go"
            />
          </div>
          <div className="col">
            <Card
              banner="Card 2"
              title="Second Title"
              content="Get this thing going!"
              button="What"
            />
          </div>
          <div className="col">
            <Card
              banner="Card 3"
              title="Thrid Title"
              content="What if we do something that we have never done before?"
              button="Alright"
            />
          </div>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <Button value="Submit" color="primary" size="lg">
        Submit
      </Button>
    </div>
  );
};

export default Home;
