import React from "react";
import { useEffect, useRef } from "react";
import { Popover as BootstrapPopover } from "bootstrap";
import { usePopover } from "../hooks/PopoverContex";
import { usePopover } from "react";

const Popover = ({
  id,
  label,
  content,
  placement = "top",
  variant = "secondary",
}) => {
  const buttonRef = useRef(null);
  const { activePopoverId, showPopover, hidePopover } = usePopover();

  useEffect(() => {
    //////
    if (buttonRef.current) {
      const popover = new BootstrapPopover(buttonRef.current, {
        trigger: "manual",
        placement,
        content,
      });
      ///////////
      if (activePopoverId === id) {
        popover.show();
      } else {
        popover.hide();
      }

      return () => popover.dispose();
    }
  }, [activePopoverId]);

  //////////

  const handleClick = () => {
    if (activePopoverId === id) {
      hidePopover();
    } else {
      showPopover(id);
    }
  };

  return (
    <div className="">
      <button
        type="button"
        className={`btn btn-${variant} m-2`}
        ref={buttonRef}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Popover;
