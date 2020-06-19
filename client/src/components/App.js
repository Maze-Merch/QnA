import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  render() {
    return (
      <div id="qna">
        <div className="qa-title">QUESTIONS AND ANWSERS</div>
        <div className="inner-addon right-addon">
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            className="qa-search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANWSERS..."
          />
        </div>
        <div>
          <div className="qa-question"> Q: Who What Which When Where Why How? </div>
          <div className="qa-answer">
            <div className="qa-test2">
              A:
            </div>
            <div className="qa-test">
              This is a anwser to a good question.
              <div className="qa-user"> by user123  January 1, 2019    | Helpful? Yes(2)    | Report </div>
            </div>
          </div>
        </div>
        <div>
          <div className="qa-question"> Q: Who What Which When Where Why How? </div>
          <div className="qa-answer">
            <div className="qa-test2">
              A:
            </div>
            <div className="qa-test">
              This is a anwser to a good question.
              <div className="qa-user"> by user123  January 1, 2019    | Helpful? Yes(2)    | Report </div>
              <div> Yes, you can see in these photos.</div>
              <div className="container">
                <div>
                  <img className="qa-thumbnail" src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                  <img className="qa-thumbnail" src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                  <img className="qa-thumbnail" src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                </div>
              </div>
              <div className="qa-user"> by user123  January 1, 2019    | Helpful? Yes(2)    | Report </div>
            </div>
          </div>
        </div>
        <div className="qa-title2">LOAD MORE ANWSERS</div>
        <div clasname="qa-buttons">
          <button className="qa-button-more">MORE ANWSERED QUESTIONS</button>
          <button className="qa-button-add">ADD A QUESTION  + </button>
        </div>
      </div>
    );
  }
}

export default App;
