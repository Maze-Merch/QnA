import React from 'react';
import BaseAnswer from './BaseAnswer.jsx';

function BaseQuestion(props) {
  console.log('1', Object.values(props.question.answers).length);

  function renderAnsButton() {
    if (Object.values(props.question.answers).length < 1) {
      return (
        <div className="qa-fst-container">
          <button className="qa-fst-btn">BE THE FIRST TO ANSWER THIS QUESTION + </button>
        </div>
      );
    }
    const unsorted = Object.values(props.question.answers);
    const sorted = unsorted.sort((a, b) => (a.helpfulness - b.helpfulness)).reverse();
    // console.log('sorted', sorted);
    const sellers = [];
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].answerer_name === 'Seller') {
        const seller = sorted.splice(i, 1);
        sellers.push(seller[0]);
      }
    }
    if (sellers.length > 0) {
      for (let j = 0; j < sellers.length; j++) {
        sorted.unshift(sellers[j]);
      }
    }
    const sliced = sorted.slice(0, 2);

    return (
      <div className="qa-answer">
        <div className="qa-test2">
          <b>A:</b>
        </div>
        <div>
          {sliced.map((answer, i) => (
            <BaseAnswer
              key={i}
              id={answer.id}
              index={i}
              answer={answer.body}
              photos={answer.photos}
              date={answer.data}
              name={answer.answerer_name}
              helpful={answer.helpfulness}
              selectModal={props.selectModal}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="qa-test2">
        <b>Q:</b>
      </div>
      <div className="qa-question">
        {props.question.question_body}
      </div>
      {renderAnsButton()}
    </div>
  );
}

export default BaseQuestion;
