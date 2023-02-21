import React from "react";
import posts from "../../assets/Dummy";

const Card = () => {
  return (
    <div className="row">
      {posts.map((post) => {
        return (
          <div className="col-4">
            <div className="card" value={post.id} key={post.id}>
              <div className="card-header">Reactions: {post.reactions}</div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <a href="Home" className="btn btn-outline-primary">
                  Press
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
