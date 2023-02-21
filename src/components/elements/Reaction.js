import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../assets/Dummy';

function Reaction() {
  let { id } = useParams();
  let post = posts.filter(reaction => reaction.id == id);

  return (
    <div>
      {post.map((p) => {
        return (
          <div className="container" key={p.id}>
            <div className="row">

              <h1>{p.title}</h1>
              <p>{p.body}</p>
              <p>Reactions: {p.reactions}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Reaction;
