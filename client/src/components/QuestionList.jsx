import React from 'react';
import BaseQuestion from './BaseQuestion';

function QuestionList(props) {
  const {
    acount, helpSubmit, qaReport, ansSelectForm, handleClick, handleClick2, qcount, quesSelectForm, questions, selectModal, searchfield,
  } = props;

  // console.log('qcount', props);

  const unsorted = questions;
  const sorted = unsorted.sort((a, b) => (a.question_helpfulness - b.question_helpfulness)).reverse();
  const sliced = sorted.slice(0, qcount);

  function renderMoreAnswers() {
    if (acount === true) {
      for (let i = 0; i < sliced.length; i++) {
        if (Object.values(sliced[i].answers).length > 2) {
          return (
            <div
              role="button"
              tabIndex="0"
              className="qa-loadAnswers"
              onClick={handleClick2}
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
          onClick={handleClick2}
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
            onClick={handleClick}
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
            index={i}
            question={question}
            acount={acount}
            helpSubmit={helpSubmit}
            qaReport={qaReport}
            ansSelectForm={ansSelectForm}
            quesid={question.question_id}
            selectModal={selectModal}
            searchfield={searchfield}
          />
        ))}
      </div>
      {renderMoreAnswers()}
      <div className="awsContainer d-flex align-items-end">
        {renderButton()}
        <button
          className="qa-button-add"
          onClick={() => quesSelectForm()}
        >
          ADD A QUESTION  +
          {' '}
        </button>
      </div>
    </div>
  );
}

export default QuestionList;
