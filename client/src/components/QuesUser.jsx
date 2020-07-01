import React from 'react';
// props passed from BaseQuestion

function QuesUser(props) {
  const {
    helpful, name, quesid, qbody, helpSubmit, ansSelectForm, qaReport,
  } = props;
  // console.log('user', props);
  return (
    <div
      className="qa-QuesUser col-5"
      quesid={quesid}
    >
      {'by '}
      <b>
        {name}
      </b>
      {' | '}
      <span
        role="button"
        tabIndex={0}
        className="helpful"
        helpnum={helpful}
        quesid={quesid}
        onClick={(event) => helpSubmit(event.target
          .parentNode.getAttribute('quesid'), 'question')}
      >
        {'Helpful? '}
        <u>Yes</u>
        {` (${helpful}) `}
      </span>
      {' | '}
      <span
        role="button"
        tabIndex={0}
        className="addAns"
        onClick={(event) => {
          ansSelectForm(qbody, quesid);
        }}
      >
        {' Add Answer '}
      </span>
      {' | '}
      <span
        quesid={quesid}
        className="report"
        onClick={() => qaReport(event.target.getAttribute('quesid'), 'question')}
      >
        Report
      </span>
    </div>
  );
}

export default QuesUser;
