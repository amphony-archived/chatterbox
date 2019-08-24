import React from 'react';
import './Searchbar.scss';

const Searchbar = props => {
  const placeholder = props.placeholder;

  return (
    <div className="searchbar left-align px-2">
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default Searchbar;
