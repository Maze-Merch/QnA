import React from 'react';
import BasePicture from './BasePicture.jsx';
import AnsUser from './AnsUser.jsx';

function BaseAnswer(props) {
  // console.log('ans', props);
  // console.log('pho', props.photos);

  return (
    <div className="qa-test singleAnswer">
      {props.answer}
      <div className="d-flex">
        {props.photos.map((photo, i) => (
          <BasePicture
            key={i}
            // ansid={props.ansid}
            index={i}
            photo={photo}
            selectModal={props.selectModal}
          />
        ))}
      </div>
      <div className="qa-ansuser">
        <AnsUser
          name={props.name}
          date={props.date}
          helpful={props.helpful}
          ansHelpSubmit={props.ansHelpSubmit}
          ansSelectForm={props.ansSelectForm}
          ansid={props.ansid}
        />
      </div>
    </div>
  );
}

export default BaseAnswer;
