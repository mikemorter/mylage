import React from "react";

const Card = ({ banner, title, content, button }) => {
  return (
    <div class="card">
      <div class="card-header">{banner}</div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{content}</p>
        <a href="#" class="btn btn-outline-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default Card;
