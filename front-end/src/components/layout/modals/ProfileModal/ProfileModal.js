import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../../../actions/userActions';
import './ProfileModal.scss';
import M from 'materialize-css/dist/js/materialize.min.js';

const ProfileModal = ({ user, updateUser }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [username, setUsername] = useState(user.username);
  const [displayMode, setDisplayMode] = useState(user.preferences.displayMode);
  const [profileColor, setProfileColor] = useState(user.preferences.profileColor);
  const profileColors = ['red', 'orange', 'purple', 'blue', 'green'];
  
  // Return full name or username based on user preferences
  const getDisplayName = () => {
    return (displayMode === 'username' ? username : `${firstName} ${lastName}`);
  }

  // Constructs profile color radio buttons
  const constructProfileColor = color => {
    return (
      <p key={color}>
        <label>
          <input
            key={color}
            type="radio"
            checked={color === profileColor}
            onChange={() => setProfileColor(color)}
          />
          <span>{color}</span>
        </label>
      </p>
    )
  }

  const onSaveChanges = () => {
    updateUser({
      ...user,
      firstName,
      lastName,
      preferences: {
        displayMode,
        profileColor
      }
    });
  }

  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <div>
      <div id="profile-modal" className="modal">
        <div className="modal-content">
          <h4 className="mb-1">Edit Your Profile</h4>
          <form className="pa-1 mb-1">
            <div className="row">
              <div className="input-field center col s4">
                <input
                  name="firstname"
                  type="text"
                  placeholder={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="input-field center col s4">
                <input
                  name="lastname"
                  type="text"
                  placeholder={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="input-field center col s4">
                <input
                  name="username"
                  type="text"
                  disabled
                  placeholder={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="firstname">Username</label>
              </div>
              <div className="switch">
                <label>
                  Use Full Name
                  <input
                    type="checkbox"
                    checked={displayMode === 'username'}
                    onChange={() => setDisplayMode(displayMode === 'username' ? 'fullname' : 'username')}
                  />
                  <span className="lever"></span>
                  Use Username
                </label>
              </div>
            </div>
            <div className="profile-colors align-left">
              {profileColors.map(color => (constructProfileColor(color)))}
            </div>
          </form>
          <div className="profile-preview valign-wrapper">
            <div className={`circle circle-medium white-text ${profileColor} mr-1`}>
              {getDisplayName()[0]}
            </div>
            <div>
              <p className={`${profileColor}-text`}>
                {getDisplayName()}
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn"
            onClick={onSaveChanges}
          >
            Save Changes
          </a>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user.user });

export default connect(mapStateToProps, { updateUser })(ProfileModal);
