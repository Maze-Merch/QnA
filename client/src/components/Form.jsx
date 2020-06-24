import React from 'react';

const Form = (props) => {
  // console.log('modal', props);
  let imgcheck = false;

  function onBtnClick(e) {
    e.preventDefault();
    imgcheck = !imgcheck;
    console.log(imgcheck);
  }

  function addimgs() {
    if (imgcheck === false) {
      return (
        <button
          className="mr-auto"
          onClick={onBtnClick}
        >
          UPLOAD IMAGES
        </button>
      );
    }
  }

  function displayInfo() {
    return (
      <form className="">
        <h5>ASK YOUR QUESTION</h5>
        <p className="p-form-b">
          ABOUT THE PRODUCT: XXXXXXX
        </p>
        <div>
          <p className="p-form"> Your Question (mandatory)</p>
          <input
            placeholder="Why did you like the product or not?"
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
            required
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
            required
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
  function onBtnClick(e) {
    e.preventDefault();
    imgcheck = !imgcheck;
    console.log(imgcheck);
    const newdiv = document.createElement('div');
    newdiv.innerHTML = 'Entry  <br><input type=\'text\' name=\'myInputs[]\'>';
    document.getElementById(addimgs).appendChild(newdiv);
  }

  function closeForm(e) {
    e.stopPropagation();
    props.closeForm();
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
          className="close"
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
export default Form;
