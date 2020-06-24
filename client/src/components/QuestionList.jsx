import React from 'react';
import BaseQuestion from './BaseQuestion.jsx';
import baseAnswer from './baseAnswer.jsx';

function QuestionList(props) {
  const unsorted = props.questions;
  // console.log('qcount', props);

  const sorted = unsorted.sort((a, b) => (a.question_helpfulness - b.question_helpfulness)).reverse();
  const sliced = sorted.slice(0, props.qcount);

  function renderMoreAnswers() {
    if (props.acount === true) {
      for (let i = 0; i < sliced.length; i++) {
        if (Object.values(sliced[i].answers).length > 2) {
          return (
            <div
              className="qa-loadAnswers"
              onClick={props.handleClick2}
            >
              LOAD MORE ANSWERS
            </div>
          );
        }
        return '';
      }
    } else {
      return (
        <div
          className="qa-loadAnswers"
          onClick={props.handleClick2}
        >
          COLLAPSE ANSWERS
        </div>
      );
    }
  }

  function renderButton() {
    if (sliced.length < unsorted.length) {
      return (
        <div className="ansBtnContainer">
          <button
            className="qa-button-more"
            onClick={props.handleClick}
          >
            {' '}
            MORE ANSWERED QUESTIONS
          </button>
        </div>
      );
    }
    return ('');
  }

  return (
    <div>
      <div className="qa-answer">
        {sliced.map((question, i) => (
          <BaseQuestion
            key={i}
            id={question.question_id}
            index={i}
            question={question}
            selectModal={props.selectModal}
            acount={props.acount}
          />
        ))}
      </div>
      {renderMoreAnswers()}
      <div className="awsContainer d-flex align-items-end">
        {renderButton()}
        <button
          className="qa-button-add"
          onClick={() => props.selectForm()}
        >
          ADD A QUESTION  +
          {' '}

        </button>
      </div>
    </div>
  );
}

export default QuestionList;
