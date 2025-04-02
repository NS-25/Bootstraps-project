import React from "react";
const Card = () => {
  return (
    <div>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
export default Card;
