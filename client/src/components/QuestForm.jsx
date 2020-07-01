import React from 'react';

const QuestForm = (props) => {
  // console.log('modal', props);
  const {
    product, displayForm, quesCloseForm, qaSubmit,
  } = props;

  function quesObj() {
    const quesemail = document.getElementById('quesemail').value;
    const quesnname = document.getElementById('quesnname').value;
    const quesbdy = document.getElementById('quesbdy').value;

    const obj = {
      email: quesemail,
      body: quesbdy,
      name: quesnname,
    };
    console.log('questForm', obj);
    return obj;
  }

  function closeForm(e) {
    e.stopPropagation();
    quesCloseForm();
  }

  function displayInfo() {
    return (
      <form
        id="quesForm"
        onSubmit={(event) => { qaSubmit(quesObj(), { product }, 'question', event); closeForm(event); }}
      >
        <h5>ASK YOUR QUESTION</h5>
        <p className="p-form-b">
          {`ABOUT THE PRODUCT: ${product}`}
        </p>
        <div>
          <p className="p-form"> Your Question (mandatory)</p>
          <span
            className="formSpan"
          >
            <input
              placeholder="Enter Question here"
              size="75"
              required
              maxLength="1000"
              id="quesbody"
              type="text"
            />
          </span>
        </div>
        <div>
          <p className="p-form">What is your nickname (mandatory)</p>
          <span
            className="formSpan"
          >
            <input
              placeholder="Example: jackson11!"
            // required
              size="65"
              maxLength="60"
              id="quesnname"
              type="text"
            />
          </span>
          <p className="p-form-b"> For privacy reasons, do not use your full name or email address</p>
        </div>
        <div>
          <p className="p-form"> Your email (mandatory)</p>
          <span
            className="formSpan"
          >
            <input
              placeholder="Example: jack@email.com"
              type="email"
            // required
              size="65"
              maxLength="60"
              id="quesemail"
            />
          </span>
          <p className="p-form-b">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="d-flex formdiv">
          <button className="formBtn" type="submit">SUBMIT</button>
          <button className="formBtn" type="reset">RESET</button>
        </div>
      </form>
    );
  }
  const divStyle = {
    display: displayForm ? 'block' : 'none',
  };

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
          role="button"
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
export default QuestForm;