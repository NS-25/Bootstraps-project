import React, { useRef } from "react";
import {usePopover} from "../../hooks/PopoverContext"

const PopoverButton = ({ label, content, placement = "top" }) => {
  const buttonRef = useRef();
  const { showPopover, hidePopover } = usePopover();

  const handleClick = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    let top = 0,
      left = 0;

    switch (placement) {
      case "top":
        top = rect.top - 40;
        left = rect.left + rect.width / 2;
        break;
      case "right":
        top = rect.top + rect.height / 2;
        left = rect.right + 10;
        break;
      case "bottom":
        top = rect.bottom + 10;
        left = rect.left + rect.width / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2;
        left = rect.left - 120;
        break;
      default:
        break;
    }

    showPopover({ top, left }, content);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onBlur={hidePopover}
      className="btn btn-secondary me-2"
    >
      {label}
    </button>
  );
};

export default PopoverButton;
