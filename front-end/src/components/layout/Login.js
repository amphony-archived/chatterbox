import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import PropTypes from 'prop-types';

import landingImage from '../../assets/landing.jpg';
import landingImage2 from '../../assets/landing2.png';

const Login = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = e => {
    e.preventDefault();
    registerUser(username);
  };

  return (
    <div className="row grey lighten-5 z-depth-2" style={formStyle}>
      <div className="col s7" style={landingStyle}>
        <h4 style={{ fontWeight: '600' }}>Welcome to Chatterbox!</h4>
        <p>The place where you...chatter</p>
      </div>
      <div className="col s5 z-depth-1" style={landingStyle2}>
        <div>
          <button className="btn mb-2" style={{ width: '100%' }}>Login</button>
          <br />
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  )
};

Login.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const formStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '50%',
  height: '60%',
  transform: 'translate(-50%, -50%)'
}

const landingStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
  padding: '2em',
  overflow: 'wrap',
  backgroundPosition: 'center center',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${landingImage})`
}

const landingStyle2 = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default connect(null, { registerUser })(Login);
