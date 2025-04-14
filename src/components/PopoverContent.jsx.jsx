import React from "react";
import { usePopover } from "../hooks/PopoverContext";

const PopoverContent = () => {
  const { popover } = usePopover();

  if (!popover.isOpen) return null;

  return (
    <div
      className="position-absolute bg-light p-2 border rounded shadow"
      style={{
        top: `${popover.position.top}px`,
        left: `${popover.position.left}px`,
        transform:
          placement === "top"
            ? "translate(-50%, -100%)"
            : placement === "bottom"
            ? "translate(-50%, 0)"
            : placement === "left"
            ? "translate(-100%, -50%)"
            : "translate(0, -50%)",
        zIndex: 9999,
      }}
    >
      {popover.content}
    </div>
  );
};

export default PopoverContent;
