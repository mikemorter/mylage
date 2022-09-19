import { React, useState } from "react";
import States from "../../assets/States";

const StateSelector = () => {
  const [stateAbrev, setStateAbrev] = useState("Choose State");

  return (
    <div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        defaultValue={setStateAbrev}
      >
        {States.map((state) => {
          return (
            <option value={state.name} key={state.name}>
              {state.abbreviation}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StateSelector;
