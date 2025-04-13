import React from "react";

const Popover = ({ label }) => {
  return (
    <div className="">
      <button type="button" className="btn btn-secondary m-2">
        {label}
      </button>
    </div>
  );
};

export default Popover;
