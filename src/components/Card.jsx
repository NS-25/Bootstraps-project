import React from "react";
const Card = () => {
  return (
    <div>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
export default Card;
