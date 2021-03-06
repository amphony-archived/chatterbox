import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../layout/Sidebar/Sidebar';
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages';
import { getUser } from '../../actions/userActions';

const Home = ({ user, getUser }) => {
  useEffect(() => {
    if (!user) getUser();
    // eslint-disable-next-line
  }, []);

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

const mapStateToProps = state => ({ user: state.user.user });

export default connect(mapStateToProps, { getUser })(Home);
