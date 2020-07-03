import React from 'react';

function BasePicture(props) {
  const { photo, selectModal } = props;
  return (
    <div>
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
