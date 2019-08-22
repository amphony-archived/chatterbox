import React from 'react';

// Styles
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar blue darken-2 py-1">
      <div className="sidebar-profile color-primary valign-wrapper">
        <p className="align-center mx-auto black-text">A</p>
      </div>
      <div className="sidebar-icons">
        <div className="mb-2">
          <i className="material-icons">people</i>
          <p>friends</p>
        </div>
        <div>
          <i className="material-icons">message</i>
          <p>rooms</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
