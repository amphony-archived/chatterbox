import React from 'react';
import { connect } from 'react-redux';

const Home = ({ currentUser }) => {
  return (
    <div>
      <h5>Hi {currentUser}, welcome to the Home Page.</h5>
    </div>
  )
};

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Home);
