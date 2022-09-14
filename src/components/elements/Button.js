import React from "react";

let content = "Press Me";

const Button = () => {
  return (
    <div>
      <button type="button" class="btn btn-outline-primary">
        {content}
      </button>
    </div>
  );
};

export default Button;
