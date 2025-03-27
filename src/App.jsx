import React from "react";
/* The following line can be included in your src/index.js or App.js file */

import { Button } from "react-bootstrap";

const App = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: "Content for section 1.",
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
      </div>
    </>
  );
};

export default App;
