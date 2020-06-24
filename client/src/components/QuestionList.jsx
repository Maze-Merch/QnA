import React from 'react';
import BaseQuestion from './BaseQuestion.jsx';
import baseAnswer from './baseAnswer.jsx';

function QuestionList(props) {
  const unsorted = props.questions;
  // console.log('qcount', props.qcount);

  const sorted = unsorted.sort((a, b) => (a.question_helpfulness - b.question_helpfulness)).reverse();
  const sliced = sorted.slice(0, props.qcount);

  function renderButton() {
    if (sliced.length < unsorted.length) {
      return (
        <div className="ansBtnContainer">
          <div className="qa-title2">LOAD MORE ANWSERS</div>
          <button
            className="qa-button-more"
            onClick={props.handleClick}
          >
            {' '}
            MORE ANWSERED QUESTIONS
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
          />
        ))}
      </div>
      <div className="awsContainer d-flex align-items-end">
        {renderButton()}
        <button className="qa-button-add">ADD A QUESTION  + </button>
      </div>
    </div>
  );
}

export default QuestionList;
