import React from "react";
import Button from "../elements/Button";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="col">Home Page</p>
        <Button value="Submit" color="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Home;
