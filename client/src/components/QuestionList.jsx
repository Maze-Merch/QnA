import React from 'react';
import BaseQuestion from './BaseQuestion.jsx';
import baseAnswer from './baseAnswer.jsx';

function QuestionList(props) {
  const unsorted = props.questions;
  // console.log('unsorted', unsorted);

  const sorted = unsorted.sort((a, b) => (a.question_helpfulness - b.question_helpfulness)).reverse();
  const sliced = sorted.slice(0, 4);

  return (
    <div className="qa-answer">
      {sliced.map((question, i) => (
        <BaseQuestion
          key={i}
          id={question.question_id}
          index={i}
          question={question}
        />
      ))}
    </div>
  );
}

export default QuestionList;
