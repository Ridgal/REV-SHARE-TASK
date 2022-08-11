import React from 'react';
import RegistrationForm from './RegistrationForm';
import logo from '../../images/logo.png'
import './Registration.scss';

const Registration = () => {
  return (
    <div className='registration'>
      <div className='registration__wrapper'>
        <div className='registration__content'>
          <div>
            <img src={logo} className='registration__logo' alt="graphic" />
          </div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
};

export default Registration;