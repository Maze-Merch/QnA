import React from 'react';

function BasePicture(props) {
  console.log('pho', props.photo);
  return (
    <div className="d-flex">
      <img className="qa-thumbnail " src={props.photo} />
    </div>
  );
}

export default BasePicture;
