import React from 'react';

function User(props) {
  // console.log('user', props);
  return (
    <div className="qa-answer">
      by
      {' '}
      <b>{props.name}</b>
      {' '}
      {props.date}
      {' '}
      |
      {' '}
      <span>
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

export default User;
