  import React from "react";

  
  import { usePopover } from "../hooks/PopoverContex";
  import { usePopover } from "react";

  const Popover = ({
    id,
    label,
    content,
    placement = "top",
    variant = "secondary",
  }) => {
    const { activePopoverId, showPopover, hidePopover } = usePopover();

    

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
          onClick={handleClick}
        >
          {label}
        </button>
      </div>
    );
  };

  export default Popover;
