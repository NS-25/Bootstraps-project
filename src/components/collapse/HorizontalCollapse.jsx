import React from "react";
import { useCollapse } from "../../hooks/CollapseProvider";

const HorizontalCollapse = ({ id, buttonLabel, content }) => {
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
          {buttonLabel}
        </button>
        {/* ////////////// */}
        <div className="d-flex align-items-start min-vh-25">
          <div
            className={`collapse collapse-horizontal ${
              isOpen ? "show" : ""
            } overflow-hidden`}
          >
            <div className={`card card-body ${isOpen ? "w-75" : "w-0"}`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCollapse;
