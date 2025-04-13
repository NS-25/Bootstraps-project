import React from "react";
import { useEffect, useRef } from "react";
import { usePopover } from "../hooks/PopoverContex";
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
