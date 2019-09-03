import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getConversation, getConversations } from '../../actions/conversationActions';
import Searchbar from '../layout/Searchbar/Searchbar';
import ConversationItem from './ConversationItem';
import './Conversations.scss';

const Conversations = ({ user, conversations, getConversation, getConversations }) => {
  useEffect(() => {
    if (conversations.length === 0) getConversations();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="conversations-container">
      <Searchbar placeholder={'Search Conversations'} />
      <div className="conversations">
        {conversations.length === 0 && (
          <div className="valign-wrapper" style={{ height: '100%' }}>
            <p className="grey-text">You haven't started any conversations.</p>
          </div>
        )}
        {conversations.length > 0 && conversations.map(conversation => (
          <ConversationItem conversation={conversation} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user,
  conversations: state.conversation.conversations
});

export default connect(mapStateToProps, { getConversation, getConversations })(Conversations);
