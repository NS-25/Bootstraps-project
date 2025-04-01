import React from "react";

const Breadcrumb = ({ type }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className={`breadcrumb-${type}`}>
            <a href="#">Home</a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
