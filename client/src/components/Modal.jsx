import React from 'react';

const Modal = (props) => {
  console.log('modal', props);

  function displayInfo() {
    return (
      <div className="modal-container">
        <img
          className="modal-img"
          src={props.modalInfo}
        />
      </div>
    );
  }
  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div
      className="modal"
      onClick={closeModal}
      style={divStyle}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="close"
          onClick={closeModal}
        >
          &times;
        </span>
        <div className="modal-flex">
          {displayInfo()}
        </div>
      </div>
    </div>
  );
};
export default Modal;

// add the following into your app.js
// this.state = {
//   modal: false,
// };

// selectModal = (info) => {
//   this.setState({modal: !this.state.modal}) // true/false toggle
// }

//   <div className="model">
//     <Modal
//       displayModal={this.state.modal}
//       closeModal={this.selectModal}
//     />
//   </div>;

// CSS
/* MODAL */
/* Background effect. It covers the entire site */
// .modal {
//   background-color: rgb(0,0,0); /* Fallback color */
//   background-color: rgba(0,0,0,0.4); /* Overlay effect: translucent background: black w/ partial opacity */
//   z-index: 1; /* Overlay effect: positioned over other containers */
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   position: fixed; /* Fix position on the top-left corner*/
//   top: 0;
//   left: 0;
//   overflow: auto; /* Enable scroll if needed */
//   padding-top: 80px; /* Location of the content container */
// }
// /* Modal content */
// .modal-content {
//   background-color: white;
//   width: 70%; /* Width in proportion to its parent container*/
//   max-width: 640px; /* Max width where it stops expanding */
//   height: 70%; /* Height in proportion to its parent container */
//   margin: auto; /* Auto margin according to the element width */
//   padding: 10px;
//   border: 1px solid black;
// }
// /* Close button */
// .close {
//  color: #080808;
//  float: right; /* Positioned to the right of the parent container whichever size it is */
//  font-size: 40px;
//  font-weight: bold;
// }
// .close:hover,
// .close:focus {
//   color: #000;
//   text-decoration: none;
//   cursor: pointer;
// }
/* END - MODAL */
