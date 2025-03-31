import React from "react";

const Alert = ({ variant, head }) => {
  return (
    <>
      <div className={` alert alert-${variant} `}>
        <h4 className={`alert-${head}`}>Well done</h4>
        <p>A simple success alert—check it out!</p>
      </div>
    </>
  );
};
export default Alert;
