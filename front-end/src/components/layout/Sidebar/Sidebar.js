import React, { useEffect } from 'react';
import ProfileModal from '../modals/ProfileModal/ProfileModal';
import FriendsModal from '../modals/FriendsModal/FriendsModal';

// Styles
import './Sidebar.scss';
import M from 'materialize-css/dist/js/materialize.min.js';

const Sidebar = () => {
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="sidebar blue darken-2 py-1">
      <div className="sidebar-icons">
        <div className="mb-4">
          <a href="#profile-modal" className="modal-trigger">
            <i className="material-icons">person_pin</i>
          </a>
          <p>profile</p>
        </div>
        <div className="mb-4">
          <a href="#friends-modal" className="modal-trigger">
            <i className="material-icons">people</i>
          </a>
          <p>friends</p>
        </div>
      </div>
      <ProfileModal />
      <FriendsModal />
    </div>
  )
}

export default Sidebar;
