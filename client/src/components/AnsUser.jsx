import React from 'react';

const moment = require('moment');

function AnsUser(props) {
  // console.log('user', props);
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
        className="helpful"
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
        className="report"
        ansid={ansid}
        onClick={() => qaReport(event.target.getAttribute('ansid'), 'anwser')}
      >
        Report
      </span>
    </div>
  );
}

export default AnsUser;
