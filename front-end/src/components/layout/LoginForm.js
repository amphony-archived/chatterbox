import React, { useCallback, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import PropTypes from 'prop-types';

const Login = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);
  
  const onClick = useCallback(() => setIndex(state => (state + 1) % 3), []);

  const forms = [
    ({ style }) => {
      return (
        <animated.div style={{...style}}>
          <div className="bg-primary mx-auto mb-2" style={{ width: '80px', height: '80px', padding: '5px', borderRadius: '50%' }}>
            <i className="material-icons medium">person</i>
          </div>
          <button
            className="btn bg-primary mb-2"
            style={{ width: '100%' }}
            onClick={onClick}
          >
            Login
          </button>
          <br />
          <button
            className="btn"
            onClick={() => setIndex(2)}
          >Get Started</button>
        </animated.div>
      )
    },
    ({ style }) => {
      return (
        <animated.div style={{...style}}>
          <form>
            <div className="input-field">
              <input
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn bg-primary">Log In!</button>
          </form>
        </animated.div>
      )
    },
    ({ style }) => {
      return (
        <animated.div>
          <form>
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
            <button className="btn">Sign Up!</button>
          </form>
        </animated.div>
      )
    }
  ];

  const transitions = useTransition(index, p => p, {
    from: { position: 'absolute', opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  const onRegister = e => {
    e.preventDefault();
    registerUser(username);
  };

  return (
    <div className="col s5 z-depth-1" style={formStyle}>
      { transitions.map(({ item, props, key }) => {
        const Form = forms[item];
        return <Form key={key} style={props} />
      })}
    </div>
  )
}

Login.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const formStyle = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default connect(null, { registerUser })(Login);
