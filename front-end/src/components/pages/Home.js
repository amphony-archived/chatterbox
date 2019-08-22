import React from 'react';
import { connect } from 'react-redux';

import Sidebar from '../layout/Sidebar/Sidebar';
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages';

const Home = ({ currentUser }) => {

  return (
    <div className="z-index-2" style={homeStyle}>
      <Sidebar />
      <Conversations />
      <Messages />
    </div>
  )
};

const homeStyle = {
  display: 'flex',
  width: '80vw',
  height: '76vh',
  backgroundColor: '#fff'
}

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Home);
