import React from 'react';

function QuesUser(props) {
  console.log('user', props);
  return (
    <div
      className="qa-QuesUser col-5"
      quesid={props.quesid}
    >
      by

      {' '}
      <b>
        {props.name}

      </b>

      {' '}
      |
      {' '}
      <span
        className="helpful"
        helpnum={props.helpful}
        quesid={props.quesid}
        onClick={(event) => props.quesHelpSubmit(event.target
          .parentNode.getAttribute('quesid'))}
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
      <span
        onClick={(event) => {
          props.ansSelectForm(event.target.getAttribute('qbody'));
          console.log('target XX', event.target.getAttribute('qbody'));
        }}
        qbody={props.qbody}
        className="addAns"
      >
        Add Answer

      </span>

    </div>
  );
}

export default QuesUser;
