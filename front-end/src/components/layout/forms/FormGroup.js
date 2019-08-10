import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { connect } from 'react-redux';
import StartForm from './StartForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';

const FormGroup = ({ layout: { index } }) => {
  const forms = [
    StartForm,
    LoginForm,
    RegisterForm
  ];

  const transitions = useTransition(index, p => p, {
    from: { position: 'absolute', opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <div className="col s5 z-depth-1" style={formStyle}>
      { transitions.map(({ item, props, key }) => {
        const Form = forms[item];
        return <Form key={key} style={props} />
      })}
    </div>
  )
}

FormGroup.propTypes = {
  layout: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  layout: state.layout
})

const formStyle = {
  height: '100%',
  width: '41.66%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default connect(mapStateToProps)(FormGroup);
