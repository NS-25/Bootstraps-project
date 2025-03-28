import React from "react";
/* The following line can be included in your src/index.js or App.js file */

// import { Accordion, Button } from "react-bootstrap";
import Badge from "./components/Badge";

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
      <Badge variant="primary" label="Oops!" type="candy" />
      <Badge variant="danger" label="used card 2" />
      <Badge variant="info" label="used card 3" type="pill" />
    </>
  );
};

export default App;
