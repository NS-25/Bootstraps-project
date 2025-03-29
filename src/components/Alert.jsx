import React from "react";

const Alert = ({ variant }) => {
  return (
    <>
      <div className={` alert alert-${variant}`}>
        A simple success alert—check it out!
      </div>
    </>
  );
};
export default Alert;
