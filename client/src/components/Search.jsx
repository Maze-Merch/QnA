import React from 'react';

function Search(props) {
  const { onSearchChange } = props;

  return (
    <div className="inner-addon right-addon">
      <i className="fa fa-search" aria-hidden="true" />
      <input
        type="text"
        className="qa-search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
