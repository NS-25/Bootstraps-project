import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return ReactDOM.createPortal(
    // <!-- Button trigger modal -->
    <>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}

      {showModal &&
        ((
          <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Modal title</h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">I am modal component!</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
        document.querySelector(".modal-container"))}
    </>
  );
};

export default Modal;
