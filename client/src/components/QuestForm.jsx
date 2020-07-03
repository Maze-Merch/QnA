import React from 'react';

const QuestForm = (props) => {
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
        onSubmit={(event) => { qaSubmit(quesObj(), product, 'question', event); closeForm(event); }}
      >
        <h5>ASK YOUR QUESTION</h5>
        <p className="qna-form-b">
          {`ABOUT THE PRODUCT: ${product}`}
        </p>
        <div>
          <p className="qna-form"> Your Question (mandatory)</p>
          <span
            className="qnaformSpan"
          >
            <input
              placeholder="Enter Question here"
              size="75"
              required
              maxLength="1000"
              id="quesbdy"
              type="text"
            />
          </span>
        </div>
        <div>
          <p className="qna-form">What is your nickname (mandatory)</p>
          <span
            className="qnaformSpan"
          >
            <input
              placeholder="Example: jackson11!"
              required
              size="65"
              maxLength="60"
              id="quesnname"
              type="text"
            />
          </span>
          <p className="qna-form-b"> For privacy reasons, do not use your full name or email address</p>
        </div>
        <div>
          <p className="qna-form"> Your email (mandatory)</p>
          <span
            className="qnaformSpan"
          >
            <input
              placeholder="Example: jack@email.com"
              type="email"
              required
              size="65"
              maxLength="60"
              id="quesemail"
            />
          </span>
          <p className="qna-form-b">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="d-flex formdiv">
          <button className="qnaformBtn" type="submit">SUBMIT</button>
          <button className="qnaformBtn" type="reset">RESET</button>
        </div>
      </form>
    );
  }
  const divStyle = {
    display: displayForm ? 'block' : 'none',
  };

  return (
    <div
      className="modal qnamodal"
      onClick={closeForm}
      style={divStyle}
    >
      <div
        className="modal-content qnaMC"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          role="button"
          className="qnaformclose"
          onClick={closeForm}
        >
          &times;
        </span>
        <div className="qnamodal-flex">
          {displayInfo()}
        </div>
      </div>
    </div>
  );
};
export default QuestForm;
