import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav>
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
