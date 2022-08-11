import React from "react";
import NewUserForm from "./NewUserForm";
import logo from '../../images/plants.jpg';
import { PersonCircle } from 'react-bootstrap-icons';
import './NewUser.scss';

const NewUser = () => {
  return (
    <div className="container">
      <div className="newuser__wrapper">
        <div className="newuser__logo_page">
          <img src={logo} className="newuser__logo" alt="graphics" />
        </div>
        <div className="newuser__content">
          <div className="newuser__content_form">
          <div className="newuser__content_logo">
            <p className="newuser__content_icon"><PersonCircle /></p>
          </div>
            <NewUserForm />
          </div> 
        </div>
      </div>
    </div>
  )
};

export default NewUser;