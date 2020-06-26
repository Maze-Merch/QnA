import React from 'react';

const AnsForm = (props) => {
  console.log('ansForm', props);

  function addimgs() {
    if (props.imgcheck === true) {
      return (
        <div>
          <div> ENTER PICTURE URLS BELOW:</div>
          <input />
          <input />
          <input />
          <input />
          <input />
        </div>
      );
    }
    if (props.imgcheck === false) {
      return (
        <button
          className="mr-auto"
          onClick={props.handleClick3}
        >
          UPLOAD IMAGES
        </button>
      );
    }
  }

  function displayInfo() {
    console.log(props);
    return (
      <form className="">
        <h5>Submit your Answer</h5>
        <p className="p-form-b">
          Product:
          {' '}
          {props.product}
          {' '}
          |
          {' '}
          {props.question}
        </p>
        <div>
          <p className="p-form"> Your Anwser (mandatory)</p>
          <input
            placeholder="Enter Anwser Here"
            size="75"
            required
            maxLength="1000"
            id="quest"
            type="text"
          />
        </div>
        <div>
          <p className="p-form">What is your nickname (mandatory)   </p>
          <input
            placeholder="Example: jackson11!"
            // required
            size="65"
            maxLength="60"
            id="nickname"
            type="text"
          />
          <p className="p-form-b"> For privacy reasons, do not use your full name or email address</p>
        </div>
        <div>
          <p className="p-form"> Your email (mandatory)</p>
          <input
            placeholder="Example: jack@email.com"
            type="email"
            // required
            size="65"
            maxLength="60"
            id="email"
          />
          <p className="p-form-b">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="d-flex formdiv">
          {addimgs()}
          <button className="formBtn" type="submit">SUBMIT</button>
          <button className="formBtn" type="reset">RESET</button>
        </div>
      </form>
    );
  }
  const divStyle = {
    display: props.displayForm ? 'block' : 'none',
  };

  function closeForm(e) {
    e.stopPropagation();
    props.ansCloseForm();
  }
  return (
    <div
      className="modal"
      onClick={closeForm}
      style={divStyle}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="formclose"
          onClick={closeForm}
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
export default AnsForm;
