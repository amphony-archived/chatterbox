import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { setFormIndex } from '../../../actions/layoutActions';
import PropTypes from 'prop-types';

const StartForm = ({ style, setFormIndex }) => {
  return (
    <animated.div style={{...style}}>
      <div className="bg-primary mx-auto mb-2" style={{ width: '80px', height: '80px', padding: '5px', borderRadius: '50%' }}>
        <i className="material-icons medium">person</i>
      </div>
      <button
        className="btn bg-primary mb-2"
        style={{ width: '100%' }}
        onClick={() => setFormIndex(1)}
      >
        Login
      </button>
      <br />
      <button
        className="btn"
        onClick={() => setFormIndex(2)}
      >
        Get Started
      </button>
    </animated.div>
  )
}

StartForm.propTypes = {
  style: PropTypes.object.isRequired,
  setFormIndex: PropTypes.func.isRequired
}

export default connect(null, { setFormIndex })(StartForm);
