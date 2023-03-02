import React from 'react';
import Counter from '../elements/Counter';

function Counters() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Counter title="Team 1" />
        </div>
        <div className="col">
          <Counter title="Team 2" />
        </div>
      </div>
    </div>
  )
}

export default Counters;
