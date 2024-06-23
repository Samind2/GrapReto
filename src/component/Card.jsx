import React from 'react';

function Card({ img, title, description }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;