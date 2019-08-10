import React, { useState } from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { setFormIndex } from '../../../actions/layoutActions';
import { registerUser } from '../../../actions/userActions';
import PropTypes from 'prop-types';

const RegisterForm = ({ style, setFormIndex, registerUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = async e => {
    e.preventDefault();
    registerUser(username, password);
    setUsername('');
    setPassword('');
  }

  return (
    <animated.div className="valign-wrapper pa-2" style={{...style, height: 'inherit', width: 'inherit' }}>
      <a
        className="btn-floating bg-primary waves-effect waves-light"
        style={{ position: 'absolute', top: '3.5%', right: '5%' }}
        onClick={() => setFormIndex(0)}
      >
        <i className="material-icons small">keyboard_backspace</i>
      </a>
      <form style={{ width: '100%' }}>
        <div className="input-field">
          <input
            name="new_username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label htmlFor="new_username">New Username</label>
        </div>
        <div className="input-field">
          <input
            name="new_password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="new_password">New Password</label>
        </div>
        <button
          className="btn"
          onClick={onRegister}
        >
          Sign Up!
        </button>
      </form>
    </animated.div>
  )
}

RegisterForm.propTypes = {
  style: PropTypes.object.isRequired,
  setFormIndex: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
}

export default connect(null, { setFormIndex, registerUser })(RegisterForm);
