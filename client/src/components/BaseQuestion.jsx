import React from 'react';
import BaseAnswer from './BaseAnswer';
import QuesUser from './QuesUser';

function BaseQuestion(props) {
  const {
    question, acount, selectModal, qaReport, ansSelectForm, helpSubmit, searchfield,
  } = props;

  const {
    question_body, asker_name, question_helpfulness,
    question_id,
  } = question;

  function renderAnsButton() {
    if (Object.values(question.answers).length < 1) {
      return (
        <div className="qa-fst-container">
          <button
            className="qa-fst-btn"
            onClick={(event) => {
              ansSelectForm(question_body, question_id);
            }}
          >
            BE THE FIRST TO ANSWER THIS QUESTION +
          </button>
        </div>
      );
    }
    const unsorted = Object.values(question.answers);
    const sorted = unsorted.sort((a, b) => (a.helpfulness - b.helpfulness)).reverse();
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

    let numAsw;
    if (acount === true) {
      numAsw = sorted.slice(0, 2);
    } else {
      numAsw = sorted;
    }

    return (
      <div className="qa-answer">
        <div>
          {numAsw.map((answer, i) => (
            <BaseAnswer
              key={i}
              ansid={answer.id}
              index={i}
              answer={answer.body}
              photos={answer.photos}
              date={answer.date}
              name={answer.answerer_name}
              helpful={answer.helpfulness}
              selectModal={selectModal}
              helpSubmit={helpSubmit}
              qaReport={qaReport}
            />
          ))}
        </div>
      </div>
    );
  }

  function getHighlightedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        { parts.map((part, i) => (
          <span
            key={i}
            style={part.toLowerCase() === highlight.toLowerCase()
              ? { backgroundColor: 'yellow' } : {}}
          >
            { part }
          </span>
        ))}
        {' '}
      </span>
    );
  }

  return (
    <div>

      <div className="row qa-row-AnsUser">
        <div className="col-sm">

          <div className="qSpan">
            <span
              className="qnsA"
            >
              Q:
            </span>
            {' '}
            {getHighlightedText(question_body, searchfield)}
          </div>
        </div>
        <QuesUser
          qbody={question_body}
          ansSelectForm={ansSelectForm}
          helpSubmit={helpSubmit}
          name={asker_name}
          helpful={question_helpfulness}
          quesid={question_id}
          qaReport={qaReport}
        />
      </div>
      {renderAnsButton()}
    </div>
  );
}

export default BaseQuestion;
