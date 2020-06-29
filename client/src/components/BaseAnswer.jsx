import React from 'react';
import BasePicture from './BasePicture';
import AnsUser from './AnsUser';

function BaseAnswer(props) {
  const {
    name, date, helpful, ans, ansReport, ansSelectForm, ansHelpSubmit, ansid, selectModal, photos, answer,
  } = props;
  // console.log('ans', props);
  // console.log('pho', props.photos);

  return (
    <div className="qa-test singleAnswer">
      {answer}
      <div className="d-flex">
        {photos.map((photo, i) => (
          <BasePicture
            key={i}
            ansid={ansid}
            index={i}
            photo={photo}
            selectModal={selectModal}
          />
        ))}
      </div>
      <div className="qa-ansuser">
        <AnsUser
          name={name}
          date={date}
          helpful={helpful}
          ansHelpSubmit={ansHelpSubmit}
          ansReport={ansReport}
          ansSelectForm={ansSelectForm}
          ansid={ansid}
        />
      </div>
    </div>
  );
}

export default BaseAnswer;
