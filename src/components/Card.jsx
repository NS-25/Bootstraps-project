import React from "react";
const Card = ({ title, imageUrl, text, buttonText }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};
export default Card;
