import React from "react";
import './NewUserPage.scss';
import NewUserPageForm from "./NewUserPageForm";

const NewUserPage = () => {
  return (
    <div className="container">
      <div className="newUserPage__content">
        <NewUserPageForm />
      </div>
    </div>
  )
};

export default NewUserPage;