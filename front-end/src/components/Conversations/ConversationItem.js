import React from 'react';

const ConversationItem = (props) => {
  const conversation = props.conversation;

  return (
    <div
      key={conversation.user}
      className="conversation valign-wrapper py-1 pl-1 pr-2"
    >
      <div className="conversation-profile valign-wrapper">
        <p className="align-center mx-auto">
          {conversation.user[0]}
        </p>
      </div>
      <div className="conversation-details left-align">
        <p className="conversation-user">
          {conversation.user}
        </p>
        <p className="conversation-message"> {conversation.messages.slice(-1)}
        </p>
      </div>
    </div>
  )
}

export default ConversationItem;
