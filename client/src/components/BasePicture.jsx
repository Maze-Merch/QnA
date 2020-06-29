import React from 'react';

function BasePicture(props) {
  // console.log('pho', props.photo);
  const { photo, selectModal } = props;
  return (
    <div className="d-flex">
      <img
        className="qa-thumbnail"
        src={photo}
        onClick={() => selectModal(photo)}
        alt="modal"
      />
    </div>
  );
}

export default BasePicture;
