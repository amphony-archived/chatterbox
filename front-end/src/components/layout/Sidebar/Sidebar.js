import React, { useEffect } from 'react';

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
          <i className="material-icons">people</i>
          <p>friends</p>
        </div>
        <div>
          <i className="material-icons">message</i>
          <p>rooms</p>
        </div>
      </div>
      <div id="profile-modal" className="modal">
        <div className="modal-content">
          <h4 className="mb-1">Edit Your Profile</h4>
          <form className="pa-1">
            <div className="row">
              <div className="input-field col s4">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Alex"
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="input-field col s4">
                <input
                  name="lastname"
                  type="text"
                  placeholder="chocolate"
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="input-field col s4">
                <input
                  name="username"
                  type="text"
                  placeholder="aamphony"
                />
                <label htmlFor="firstname">Username</label>
              </div>
            </div>
            <div className="profile-colors align-left">
              <p>
                <label>
                  <input type="radio" />
                  <span>Red</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" />
                  <span>Orange</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" />
                  <span>Blue</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" />
                  <span>Purple</span>
                </label>
              </p>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn"
          >
            Save Changes
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
