import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import './Messages.scss';

const Messages = ({ conversation }) => {
  // TODO: add type of message: ongoing, outgoing
  let messages = [];
  let participants = null;
  let username = null;

  if (conversation) {
    messages = conversation.messages;
    participants = conversation.participants;
    username = participants[0].username;
  }

  return (
    <div className="messages-container z-depth-1">
      <div className="message-section message-section-user valign-wrapper pa-2">
        <p>{username}</p>
      </div>
      <div className="divider"></div>
      <div className="message-section message-section-area pa-2">
        {messages.length === 0 && (
          <div>
            <p>You have no messages</p>
          </div>
        )}
        {messages.map(message => (
          <MessageItem message={message} />
        ))}
      </div>
      <div className="message-section message-section-input pl-1">
        <input type="text" placeholder="Message" />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ conversation: state.conversation.conversation });

export default connect(mapStateToProps)(Messages);
