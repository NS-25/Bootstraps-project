import React from "react";
import { useCollapse } from "../../hooks/CollapseProvider";

const CollapseToggle = ({ id, buttonLabel }) => {
  const { toggleCollapse } = useCollapse();
  return (
    <button
      className="btn btn-primary mb-2"
      type="button"
      onClick={() => toggleCollapse(id)}
    >
      {buttonLabel}
    </button>
  );
};

export default CollapseToggle;
