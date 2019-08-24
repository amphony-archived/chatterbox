import React from 'react';
import Searchbar from '../../Searchbar/Searchbar';
import './FriendsModal.scss';

const FriendsModal = props => {
  const { friends, isOnline } = props;
  return (
    <div>
      <div id="friends-modal" className="modal">
        <div className="modal-content">
          <h4 className="mr-1">Friends</h4>
          <Searchbar placeholder={'Search by username'}/>
          <div className="friends-container">
            <div className="friends">
              {friends.map(friend => (
                <div className="friend valign-wrapper">
                  <p key={friend.name} className="valign-wrapper">
                    <span className={`${isOnline(friend)}-text mr-1`}>{friend.name}</span>
                    <span className={`circle circle-xsmall ${isOnline(friend)}`}></span>
                  </p>
                  <div className="valign-wrapper">
                    { !friend.isFriend && (
                      <i className="material-icons mr-1">person_add</i>
                    )}
                    <i className="material-icons">message</i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    </div>
  )
}

export default FriendsModal;
