import React from "react";

const Button = ({ content, classes }) => {
  return (
    <div>
      <button type="button" class={classes}>
        {content}
      </button>
    </div>
  );
};

export default Button;
