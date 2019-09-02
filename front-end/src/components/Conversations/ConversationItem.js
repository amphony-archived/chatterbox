import React from 'react';

const ConversationItem = ({ conversation }) => {
  const { participants, messages } = conversation;
  const { preferences, username } = participants[0];

  if (conversation) {
    return (
      <div
        key={conversation._id}
        className="conversation valign-wrapper py-1 pl-1 pr-2"
      >
        <div className={`conversation-profile valign-wrapper ${preferences && preferences.profileColor}`}>
          <p className="align-center mx-auto">
            {username && username.charAt(0).toUpperCase()}
          </p>
        </div>
        <div className="conversation-details left-align">
          <p className="conversation-user">
            {username}
          </p>
          <p className="conversation-message">
            {(messages && messages[messages.length - 1]) || 'No Messages'}
          </p>
        </div>
      </div>
    )
  }
}

export default ConversationItem;
