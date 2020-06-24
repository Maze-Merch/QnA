import React from 'react';
import BasePicture from './BasePicture.jsx';
import User from './User.jsx';

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
            id={props.id}
            index={i}
            photo={photo}
            selectModal={props.selectModal}
          />
        ))}
      </div>
      <div className="qa-user">
        <User name={props.name} date={props.date} helpful={props.helpful} />
      </div>
    </div>
  );
}

export default BaseAnswer;
