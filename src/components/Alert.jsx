import React from "react";

const Alert = ({ variant, head, close }) => {
  return (
    <>
      <div className={` alert alert-${variant} `}>
        <h4 className={`alert-${head}`}>Well done</h4>
        <p>A simple success alert—check it out!</p>
      </div>
      <div className={` alert alert-${variant} alert-dismissible fade show `}>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className={`btn-${close}`}
          data-bs-dismiss="alert"
          arial-label="Close"
        ></button>
      </div>
    </>
  );
};
export default Alert;
