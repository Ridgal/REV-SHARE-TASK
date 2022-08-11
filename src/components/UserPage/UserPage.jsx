import React from "react";
import UserForm from './UserPageForm';
import './UserPage.scss';

const UserPage = () => {
  return (
    <div className="container">
      <div className="user__content">
        <UserForm />
      </div>
    </div>
  )
};

export default UserPage;