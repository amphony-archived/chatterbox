import React from 'react';

const MessageItem = props => {
  const { user, message, type } = props.message;

  // Determines position of flex elements and margin
  // These styles are different between incoming and outgoing messages
  const calcStyle = () => {
    return (type === 'incoming' ? 'order-0 mr-1' : 'order-1 ml-1');
  }

  return (
    <div key={message} className={`message-container message-container-${type}`}>
      <div className="valign-wrapper" style={{ display: 'flex' }}>
        <div className={`circle circle-small valign-wrapper blue ${calcStyle()}`}>
          <p>{ user[0] }</p>
        </div>
        <span className={`message message-${type}`}>{message}</span>
      </div>
    </div>
  )
}

export default MessageItem;
