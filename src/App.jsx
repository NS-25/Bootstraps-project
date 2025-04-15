import React from "react";
/* The following line can be included in your src/index.js or App.js file */

// import { Accordion, Button } from "react-bootstrap";
import Badge from "./components/Badge";
import Alert from "./components/Alert";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import Modal from "./components/Modal";
//for navbar features..
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PopoverButton from "./components/popover/PopoverButton.jsx";
import PopoverContent from "./components/popover/PopoverContent.jsx.jsx";

const Home = () => <h1>Welcome to my home page!🏡🏡🏡</h1>;
const Features = () => <h1>This is my features page guys! 🚀🚀🚀 </h1>;
const Pricing = () => <h1>This is my pricing page! 💲💲💲 </h1>;

//////////////////////////////
// const links = [
//   {
//     id: 1,
//     label: "Home",
//     path: "/",
//   },
//   {
//     id: 2,
//     label: "Library",
//     path: "/library",
//   },
//   {
//     id: 3,
//     label: "Data",
//     path: "/library/data",
//   },
// ];
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
    text: "This is Card B",
    buttonText: "Click B",
  },
  {
    title: "Card C",
    imageUrl: "https://picsum.photos/200",
    text: "This is Card C",
    buttonText: "Click C",
  },
];

const handleCardClick = (title) => {
  alert(`Clicked: ${title}`);
};

const handleEdit = () => {
  alert("Edit Clicked");
};

const handleDelete = () => {
  alert("Delete Clicked");
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
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </div>

      <div className="p-5 position-relative">
        <PopoverButton label="Top" content="I'm at the top" placement="top" />
        <PopoverButton
          label="Right"
          content="I'm on the right"
          placement="right"
        />
        <PopoverButton
          label="Bottom"
          content="I'm at the bottom"
          placement="bottom"
        />
        <PopoverButton
          label="Left"
          content="I'm on the left"
          placement="left"
        />

        <PopoverContent />
      </div>

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
            // className="col-md-4 col-sm-6"
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            text={card.text}
            buttonText={card.buttonText}
            onButtonClick={() => handleCardClick(card.title)}
            onEdit={handleEdit}
            onDelete={handleDelete}
            showActions={true}
          />
        ))}
      </div>
      <div className="mt-2">
        <Modal />
      </div>
    </>
  );
};

export default App;
