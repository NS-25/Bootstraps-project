import React from "react";
// import { useState } from "react";

const Accordion = ({ items }) => {
  // const [openItem, setOpenItem] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => {
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">{item.title}</h2>
          <div className="accordion-body">{item.content}</div>
        </div>;
      })}
    </div>
  );
};

export default Accordion;
