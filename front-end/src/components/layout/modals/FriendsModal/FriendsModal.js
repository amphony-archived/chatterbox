import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Searchbar from '../../Searchbar/Searchbar';
import { getContacts, addContact, getUsers, clearUsers } from '../../../../actions/userActions';
import { addConversation, getConversations } from '../../../../actions/conversationActions';
import './FriendsModal.scss';

const FriendsModal = ({
  currentUser, 
  users,
  contacts,
  getUsers,
  clearUsers,
  getContacts,
  addContact,
  addConversation,
  getConversations
}) => {
  useEffect(() => {
    if (contacts.length === 0) getContacts();
    // eslint-disable-next-line
  }, []);

  const isOnline = user => {
    return (user.online ? 'green' : 'grey');
  }

  const onAddContact = async user => {
    await addContact(user);
    getContacts();
  }

  const onAddConversation = async user => {
    const participants = [currentUser._id, user._id];
    await addConversation(participants);
    getConversations();
  }

  return (
    <div>
      <div id="friends-modal" className="modal">
        <div className="modal-content">
          <h4 className="mr-1">Friends</h4>
          <Searchbar
            action={getUsers}
            clear={clearUsers}
            placeholder={'Search by username'}
          />
          <div className="friends-container">
            <div className="friends">
              { users.length > 0 && users.filter(user => !currentUser.contacts.includes(user._id)).map(user => (
                <div className="friend valign-wrapper">
                  <p key={user.name} className="valign-wrapper">
                    <span className={`${isOnline(user)}-text mr-1`}>{user.username}</span>
                    <span className={`circle circle-xsmall ${isOnline(user)}`}></span>
                  </p>
                  <div className="valign-wrapper">
                    { !user.isFriend && (
                      <i
                        className="material-icons mr-1"
                        onClick={() => onAddContact(user)}
                      >
                        person_add
                      </i>
                    )}
                    <i
                      className="material-icons"
                      onClick={() => onAddConversation(user)}
                    >
                      message
                    </i>
                  </div>
                </div>
              ))}
              { contacts.length === 0 && (
                <div className="valign-wrapper" style={{ height: '100%' }}>
                  <p className="friends-text pa-1">You have no friends. Add some.</p>
                </div>
                )
              }
              { (users.length === 0 && contacts.length > 0) && contacts.map(contact => (
                <div className="friend valign-wrapper">
                  <p key={contact.name} className="valign-wrapper">
                    <span className={`${isOnline(contact)}-text mr-1`}>{contact.username}</span>
                    <span className={`circle circle-xsmall ${isOnline(contact)}`}></span>
                  </p>
                  <div className="valign-wrapper">
                    { !contact.isFriend && (
                      <i className="material-icons mr-1">person_add</i>
                    )}
                    <i
                      className="material-icons"
                      onClick={() => onAddConversation(contact)}
                    >
                      message
                    </i>
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

const mapStateToProps = state => ({
  currentUser: state.user.user,
  users: state.user.users,
  contacts: state.user.contacts
});

export default connect(mapStateToProps, {
  getUsers,
  clearUsers,
  getContacts,
  addContact,
  addConversation,
  getConversations
})(FriendsModal);
