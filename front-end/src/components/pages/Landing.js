import React from 'react';
import FormGroup from '../layout/forms/FormGroup';
import landingImage from '../../assets/landing.jpg';

const Landing = () => {
  return (
    <div className="row grey lighten-4 z-depth-2" style={containerStyle}>
      <div className="col s7" style={visualStyle}>
        <h4>Welcome to Chatterbox!</h4>
        <p>The place where you chat with your friends.</p>
      </div>
      <FormGroup />
    </div>
  )
}

const containerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '50%',
  height: '60%',
  transform: 'translate(-50%, -50%)'
}

const visualStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
  padding: '2em',
  overflow: 'wrap',
  backgroundPosition: 'center center',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url(${landingImage})`
}

export default Landing;
