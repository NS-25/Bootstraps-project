import React from "react";
/* The following line can be included in your src/index.js or App.js file */

// import { Accordion, Button } from "react-bootstrap";
import Badge from "./components/Badge";
import Alert from "./components/Alert";

const App = () => {
  // const accordionData = [
  //   {
  //     title: "Section 1",
  //     content: "Content for section 1.",
  //   },
  //   {
  //     title: "Section 2",
  //     content: "Content for section 2.",
  //   },
  //   {
  //     title: "Section 3",
  //     content: "Content for section 3.",
  //   },
  // ];

  return (
    <>
      <Badge variant="primary" label="used card 1" type="default" size="fs-4" />
      <Badge variant="danger" label="used card 2" type="default" />
      <Badge variant="info" label="used card 3" type="pill" />
      <div>
        <Alert />
      </div>
    </>
  );
};

export default App;
