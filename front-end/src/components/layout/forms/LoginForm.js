import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { setFormIndex } from '../../../actions/layoutActions';
import PropTypes from 'prop-types';

const LoginForm = ({ style, setFormIndex }) => {
  return (
    <animated.div className="valign-wrapper pa-2" style={{...style, width: 'inherit', height: 'inherit' }}>
      <a
        className="btn-floating color-primary waves-effect waves-light"
        style={{ position: 'absolute', top: '3.5%', left: '5%' }}
        onClick={() => setFormIndex(0)}
      >
        <i className="material-icons">keyboard_backspace</i>
      </a>
      <form style={{ width: '100%' }}>
        <div className="input-field">
          <input
            name="username"
            type="text"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field">
          <input
            name="password"
            type="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn bg-primary">Log In!</button>
      </form>
    </animated.div>
  )
}

LoginForm.propTypes = {
  style: PropTypes.object.isRequired,
  setFormIndex: PropTypes.func.isRequired
}

export default connect(null, { setFormIndex })(LoginForm);
