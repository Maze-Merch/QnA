import React from 'react';

const moment = require('moment');

function AnsUser(props) {
  // console.log('user', props);
  return (
    <div
      className="qa-answer"
      ansid={props.ansid}
    >
      by
      {' '}
      <b>{props.name}</b>
      {'  '}
      {moment(props.date).format('MMMM Do YYYY')}
      {' '}
      |
      {' '}
      <span
        className="helpful"
        helpnum={props.helpful}
        ansid={props.ansid}
        onClick={(event) => props.ansHelpSubmit(event.target
          .parentNode.getAttribute('ansid'))}
      >
        Helpful?
        {' '}
        <u>Yes</u>
        {' '}
        (
        {props.helpful}
        )
      </span>
      {' '}
      |
      {' '}
      <span>Report</span>

    </div>
  );
}

export default AnsUser;
