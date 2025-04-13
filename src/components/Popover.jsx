import React from "react";
import { useState, useEffect, useRef } from "react";
const Popover = ({ label, content,placement}) => {
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-secondary m-2"
        data-bs-toggle="popover"
        data-bs-placement={placement}
        data-bs-content={content}
      >
        {label}
      </button>
    </div>
  );
};

export default Popover;
