import React from "react";
import usePopover from "./usePopover";

const PopoverContent = () => {
  const { popover } = usePopover();

  if (!popover.isOpen) return null;

  return (
    <div
      className="position-absolute bg-light p-2 border rounded shadow"
      style={{
        top: `${popover.position.top}px`,
        left: `${popover.position.left}px`,
        transform: "translate(-50%, -100%)",
        zIndex: 9999,
      }}
    >
      {popover.content}
    </div>
  );
};

export default PopoverContent;
