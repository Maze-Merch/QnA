import React, { Component } from 'react';
import Modal from './Modal';
import QuestionList from './QuestionList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      modal: false,
      questions:{
        product_id: "5",
        results: [
        {
        question_id: 36,
        question_body: "What fabric is the top made of?",
        question_date: "2018-06-17T00:00:00.000Z",
        asker_name: "funnygirl",
        question_helpfulness: 11,
        reported: 0,
        answers: {
        1: {
        id: 1,
        body: "Supposedly suede, but I think its synthetic",
        date: "2018-01-17T00:00:00.000Z",
        answerer_name: "Seller",
        helpfulness: 2,
        photos: [
          "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
          "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          "https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          ]
        },
        15: {
        id: 15,
        body: "Its the best! Seriously magic fabric",
        date: "2018-01-17T00:00:00.000Z",
        answerer_name: "sillyguy",
        helpfulness: 7,
        photos: [ ]
        },
        28: {
        id: 28,
        body: "Suede",
        date: "2018-01-17T00:00:00.000Z",
        answerer_name: "sillyguy",
        helpfulness: 0,
        photos: [ ]
        },
        124796: {
        id: 124796,
        body: "The cake is a lie",
        date: "2019-10-24T00:00:00.000Z",
        answerer_name: "Spangebob",
        helpfulness: 0,
        photos: [ ]
        }
        }
        },
        {
        question_id: 37,
        question_body: "Why is this product cheaper here than other sites?",
        question_date: "2018-10-18T00:00:00.000Z",
        asker_name: "willsmith",
        question_helpfulness: 7,
        reported: 0,
        answers: {
        68: {
        id: 68,
        body: "We are selling it here without any markup from the middleman!",
        date: "2018-08-18T00:00:00.000Z",
        answerer_name: "Seller",
        helpfulness: 4,
        photos: [ ]
        }
        }
        },
        {
        question_id: 38,
        question_body: "How long does it last?",
        question_date: "2019-06-28T00:00:00.000Z",
        asker_name: "funnygirl",
        question_helpfulness: 3,
        reported: 0,
        answers: {
        70: {
        id: 70,
        body: "Some of the seams started splitting the first time I wore it!",
        date: "2019-11-28T00:00:00.000Z",
        answerer_name: "sillyguy",
        helpfulness: 6,
        photos: [ ]
        }
        }
        },
        {
        question_id: 34,
        question_body: "Can I wash it?",
        question_date: "2017-01-04T00:00:00.000Z",
        asker_name: "luaulover",
        question_helpfulness: 2,
        reported: 0,
        answers: {
        10: {
        id: 10,
        body: "I've thrown it in the wash and it seems fine",
        date: "2017-01-04T00:00:00.000Z",
        answerer_name: "skilover",
        helpfulness: 1,
        photos: [
        "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
        "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        ]
        },
        11: {
        id: 11,
        body: "It says not to",
        date: "2017-01-04T00:00:00.000Z",
        answerer_name: "skilover",
        helpfulness: 2,
        photos: [ ]
        },
        12: {
        id: 12,
        body: "Yes",
        date: "2017-01-04T00:00:00.000Z",
        answerer_name: "skilover",
        helpfulness: 3,
        photos: [ ]
        },
        43: {
        id: 43,
        body: "I wouldn't machine wash it",
        date: "2017-11-04T00:00:00.000Z",
        answerer_name: "skilover",
        helpfulness: 5,
        photos: [ ]
        },
        55: {
        id: 55,
        body: "Only if you want to ruin it!",
        date: "2017-11-04T00:00:00.000Z",
        answerer_name: "skilover",
        helpfulness: 5,
        photos: [ ]
        }
        }
        },
        {
        question_id: 35,
        question_body: "Where is this product made?",
        question_date: "2018-07-06T00:00:00.000Z",
        asker_name: "bballfan",
        question_helpfulness: 0,
        reported: 0,
        answers: {
        27: {
        id: 27,
        body: "Canada",
        date: "2018-08-06T00:00:00.000Z",
        answerer_name: "footballfan",
        helpfulness: 9,
        photos: [ ]
        }
        }
        }
        ]
        }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  selectModal = (info) => {
    this.setState({modal: !this.state.modal}) // true/false toggle
  }

  render() {
    return (
      <div>
        <div id="qna">
          <div className="qa-title">QUESTIONS AND answerS</div>
          <div className="inner-addon right-addon">
            <i className="fa fa-search" aria-hidden="true" />
            <input
              type="text"
              className="qa-search"
              placeholder="HAVE A QUESTION? SEARCH FOR answerS..."
            />
          </div>
          <div>
            <div className="qa-question"> Q: Who What Which When Where Why How? </div>
            <div className="qa-answer">
              <div className="qa-test2">
                A:
              </div>
              <div className="qa-test">
                This is a answer to a good question.
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
                This is a answer to a good question.
                <div className="qa-user"> by user123  January 1, 2019    | Helpful? Yes(2)    | Report </div>
                <div> Yes, you can see in these photos.</div>
                <div className="container d-flex align-content-start ">

                    <img className="qa-thumbnail " src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" onClick={ this.selectModal}/>
                    <img className="qa-thumbnail" src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  onClick={ this.selectModal}/>
                    <img className="qa-thumbnail" src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" onClick={ this.selectModal}/>

                </div>
                <div className="qa-user"> by user123  January 1, 2019    | Helpful? Yes(2)    | Report </div>
              </div>
            </div>
          </div>
          <div className="qa-title2">LOAD MORE answerS</div>
          <div clasname="qa-buttons">
            <button className="qa-button-more">MORE answerED QUESTIONS</button>
            <button className="qa-button-add">ADD A QUESTION  + </button>
          </div>
        </div>
        <div className="QuestionList">
          <QuestionList
          questions = {this.state.questions.results}/>
          </div>
        <div className="model">
             <Modal
                 displayModal={this.state.modal}
                 closeModal={this.selectModal}
             />
          </div>
        </div>
    );
  }
}

export default App;
