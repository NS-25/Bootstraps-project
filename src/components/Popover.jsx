import React from "react";

const Popover = () => {
  return (
    <div>
      <button type="button" className="btn btn-secondary">
        Popover on top!
      </button>
      <button type="button" className="btn btn-primary">
        Popover on right!
      </button>
      <button type="button" className="btn btn-success">
        Popover on bottom!
      </button>
      <button type="button" className="btn btn-info">
        Popover on left!
      </button>
    </div>
  );
};

export default Popover;
