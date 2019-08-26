import React, { useEffect } from 'react';
// import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import FormGroup from '../layout/forms/FormGroup';
import { getUser } from '../../actions/userActions';
import landingImage from '../../assets/landing.jpg';

const Landing = ({ user, getUser }) => {
  useEffect(() => {
    // getUser();
    // eslint-disable-next-line
  }, []);

  // if user has token, redirect to main page
  // if (user) return <Redirect push to={`/${user.username}`} />;

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

const mapStateToProps = state => ({ user: state.user.user });

export default connect(mapStateToProps, { getUser })(Landing);
