import React from 'react';
import Searchbar from '../layout/Searchbar/Searchbar';
import ConversationItem from './ConversationItem';
import './Conversations.scss';

const Conversations = () => {
  const conversations = [
    {
      user: "Jonathan Ma",
      messages: ["hey, what's up?", "i'm doing to hop in cod in a bit. down?"]
    },
    {
      user: "Snake",
      messages: ["I've located Shadow Moses..."]
    },
    {
      user: "Handler",
      messages: ["Hey, partner!"]
    },
    {
      user: "Harry Potter",
      messages: ["hey, what's up?", "EXPECTO PETROLEUM!"]
    },
    {
      user: "Dexter",
      messages: ["hey, what's up?", "Get our of my lab!"]
    },
    {
      user: "Au Yeung",
      messages: ["hey, what's up?", "Time for the test you lousy mongrels"]
    },
    {
      user: "Jonathan Ma",
      messages: ["hey, what's up?", "i'm doing to hop in cod in a bit. down?"]
    }
  ];

  return (
    <div className="conversations-container">
      <Searchbar />
      <div className="conversations">
        {conversations.map(conversation => (
          <ConversationItem conversation={conversation} />
        ))}
      </div>
    </div>
  )
}

export default Conversations;
