import React from 'react';

const moment = require('moment');

function AnsUser(props) {
  const {
    ansid, name, date, helpful, qaReport,
    helpSubmit,
  } = props;

  return (
    <div
      className="qa-answer"
      ansid={ansid}
    >
      by
      {' '}
      <b>{name}</b>
      {'  '}
      {moment(date).format('MMMM Do YYYY')}
      {' '}
      |
      {' '}
      <span
        className="qnahelpful"
        helpnum={helpful}
        ansid={ansid}
        onClick={(event) => helpSubmit(event.target
          .parentNode.getAttribute('ansid'), 'answer')}
      >
        Helpful?
        {' '}
        <u>Yes</u>
        {' '}
        (
        {helpful}
        )
      </span>
      {' '}
      |
      {' '}
      <span
        className="qnareport"
        ansid={ansid}
        onClick={() => qaReport(event.target.getAttribute('ansid'), 'anwser')}
      >
        Report
      </span>
    </div>
  );
}

export default AnsUser;
