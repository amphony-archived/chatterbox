import React from 'react';
import './Searchbar.scss';

const Searchbar = ({ placeholder, action, clear }) => {
  const onChangeInput = e => {
    e.target.value.length > 0 ? action(e.target.value) : clear();
  }

  return (
    <form className="searchbar left-align px-2" >
      <input
        type="text"
        onChange={onChangeInput}
        placeholder={placeholder}
      />
    </form>
  )
}

export default Searchbar;
