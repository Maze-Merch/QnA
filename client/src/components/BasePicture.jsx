import React from 'react';

function BasePicture(props) {
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
