import React from 'react';

const moment = require('moment');

function AnsUser(props) {
  // console.log('user', props);
  const {
    ansid, name, date, helpful, ansReport,
    ansHelpSubmit,
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
        onClick={(event) => ansHelpSubmit(event.target
          .parentNode.getAttribute('ansid'))}
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
        onClick={() => ansReport(event.target.getAttribute('ansid'))}
      >
        Report

      </span>

    </div>
  );
}

export default AnsUser;
