import React from "react";

const Card = ({ banner, title, content, button }) => {
  return (
    <div className="card">
      <div className="card-header">{banner}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-outline-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default Card;
