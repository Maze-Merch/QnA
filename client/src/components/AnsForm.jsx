import React from 'react';

const AnsForm = (props) => {
  // console.log('ansForm', props);

  const {
    ansCloseForm, product, question, ansQuesId, qaSubmit, displayForm, handleClick3, imgcheck,
  } = props;

  function answerObj() {
    const ansemail = document.getElementById('ansemail').value;
    const ansnname = document.getElementById('ansnname').value;
    const ansbdy = document.getElementById('ansbdy').value;
    const photoArr = [];
    const docPhotos = document.querySelectorAll('.photo');
    // console.log(docPhotos);

    if (docPhotos.length > 0) {
      for (let i = 0; i < 5; i++) {
        if (docPhotos[i].value.length > 0) { photoArr.push(docPhotos[i].value); }
      }
    }
    const obj = {
      email: ansemail,
      body: ansbdy,
      name: ansnname,
      photos: photoArr,
    };
    return obj;
  }

  function closeForm(e) {
    e.stopPropagation();
    ansCloseForm();
  }

  function addimgs() {
    if (imgcheck === true) {
      return (
        <div>
          <div> ENTER PICTURE URLS BELOW:</div>
          <input className="photo" />
          <input className="photo" />
          <input className="photo" />
          <input className="photo" />
          <input className="photo" />
        </div>
      );
    }
    if (imgcheck === false) {
      return (
        <button
          className="mr-auto"
          onClick={handleClick3}
        >
          UPLOAD IMAGES
        </button>
      );
    }
  }

  function displayInfo() {
    // console.log('YYY', props);
    return (
      <form
        id="ansForm"
        className=""
        name="answerSubmit"
        onSubmit={(event) => { qaSubmit(answerObj(), ansQuesId, 'answer', event); closeForm(event); }}
      >
        <h5>Submit your Answer</h5>
        <p className="p-form-b">
          {`Product:   ${product}  |  ${question}`}
        </p>
        <div>
          <p className="p-form"> Your answer (mandatory)</p>
          <span
            className="formSpan"
          >
            <input
              placeholder="Enter answer Here"
              size="75"
              required
              maxLength="1000"
              id="ansbody"
              type="text"
            />
          </span>
        </div>
        <div>
          <p className="p-form">What is your nickname (mandatory)   </p>
          <span
            className="formSpan"
          >
            <input
              placeholder="Example: jackson11!"
              required
              size="65"
              maxLength="60"
              id="ansnname"
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
              required
              size="65"
              maxLength="60"
              id="ansemail"
            />
          </span>
          <p className="p-form-b">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="d-flex formdiv">
          {addimgs()}
          <button
            className="formBtn"
            type="submit"
          >
            SUBMIT

          </button>
          <p
            id="valError"
          />
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
