import React from "react";
import { useCollapse } from "../../hooks/CollapseProvider";

const HorizontalCollapse = ({
  id,
  buttonText,
  widthClass = "w-75",
  content,
}) => {
  const { visibleId, toggleCollapse } = useCollapse();
  const isOpen = visibleId === id;

  return (
    <>
      <div className="mb-3">
        <button
          className="btn btn-primary mb-2"
          type="button"
          onClick={() => toggleCollapse(id)}
        >
          {buttonText}
        </button>
        {/* ////////////// */}
        <div className="d-flex align-items-start min-vh-25">
          <div
            className={`collapse collapse-horizontal overflow-hidden ${
              isOpen ? "show" : ""
            } ${widthClass}`}
          >
            <div className="card card-body w-100">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCollapse;
