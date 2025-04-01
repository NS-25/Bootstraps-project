import React from "react";
/* The following line can be included in your src/index.js or App.js file */

// import { Accordion, Button } from "react-bootstrap";
import Badge from "./components/Badge";
import Alert from "./components/Alert";
import Breadcrumb from "./components/Breadcrumb";

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
      <Badge variant="primary" label="used card 1" type="default" size="2" />
      <Badge variant="danger" label="used card 2" type="default" size="1" />
      <Badge variant="info" label="used card 3" type="pill" />
      <div>
        <Alert variant="success" head="heading" close="close" />
        <Alert variant="warning" close="close" />
      </div>
      <div className="mt-1">
        <Breadcrumb type="item" />
      </div>
    </>
  );
};

export default App;
