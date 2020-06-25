import React from 'react';

function AnsUser(props) {
  // console.log('user', props);
  return (
    <div className="qa-AnsUser col-5">
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
      <span>Add Anwser</span>

    </div>
  );
}

export default AnsUser;
