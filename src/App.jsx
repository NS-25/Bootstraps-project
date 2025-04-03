import React from "react";
/* The following line can be included in your src/index.js or App.js file */

// import { Accordion, Button } from "react-bootstrap";
import Badge from "./components/Badge";
import Alert from "./components/Alert";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";

const links = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Library",
    path: "/library",
  },
  {
    id: 3,
    label: "Data",
    path: "/library/data",
  },
];
// Card components
const CardList = [
  {
    title: "Card A",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
    text: "This is Card A",
    buttonText: "Click A",
  },
  {
    title: "Card B",
    imageUrl: "https://picsum.photos/id/237/200/300",
    text: "Click B",
  },
  {
    title: "Card C",
    imageUrl: "https://picsum.photos/200",
    text: "Click C",
  },
];

const handleCardClick = (title) => {
  alert(`Clicked: ${title}`);
};

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
      {/* <Breadcrumb items={links} /> */}
      {/* <Badge variant="primary" label="used card 1" type="default" size="2" />
      <Badge variant="danger" label="used card 2" type="default" size="1" />
      <Badge variant="info" label="used card 3" type="pill" />
      <div>
        <Alert variant="success" head="heading" close="close" />
        <Alert variant="warning" close="close" />
      </div>
      <div className="mt-4">
        <Breadcrumb type="item" />
      </div> */}

      <div className="container mt-5 d-flex flex-wrap">
        {CardList.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            text={card.text}
            buttonText={card.buttonText}
            onButtonClick={() => handleCardClick(card.title)}
          />
        ))}
      </div>
    </>
  );
};

export default App;
