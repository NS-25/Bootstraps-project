import React from "react";
/* The following line can be included in your src/index.js or App.js file */

import { Accordion, Button } from "react-bootstrap";

const App = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: "Content for section 1.",
    },
    {
      title: "Section 2",
      content: "Content for section 2.",
    },
    {
      title: "Section 3",
      content: "Content for section 3.",
    },
  ];
  return (
    <>
      <div>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </div>
      {/* ------Accodion--------- */}
      <div className="container">
        <h1>Accordion Example</h1>
        <Accordion items={accordionData} />
      </div>
    </>
  );
};

export default App;
