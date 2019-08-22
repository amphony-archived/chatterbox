import React from 'react';
import MessageItem from './MessageItem';
import './Messages.scss';

const Messages = () => {
  const messages = [
    {
      user: 'Jonathan',
      message: 'Hey man',
      type: 'incoming'
    },
    {
      user: 'Alex',
      message: 'Good luck on that',
      type: 'outgoing' 
    },
    {
      user: 'Jonathan',
      message: 'Yessir',
      type: 'incoming'
    }
  ];

  return (
    <div className="messages-container z-depth-1">
      <div className="message-section message-section-user valign-wrapper pa-2">
        <p>Jonathan Ma</p>
      </div>
      <div className="divider"></div>
      <div className="message-section message-section-area pa-2">
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

export default Messages;
