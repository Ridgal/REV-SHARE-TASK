import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as uuid from "uuid";
import './Registration.scss';

const RegistrationForm = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (username && password) {
      const found = users?.find((i) => {
        if (i.username === username && i.password !== password) {
          return false;
        } else if (i.username === username && i.password === password) {
          return true;
        }
        return false;
      });

      const id = uuid.v4();
      const candidate = found || {
        username,
        password,
        id,
        balance: 0,
      };

      if (!found) {
        const data = users || [];
        const newUsers = JSON.stringify([...data, candidate]);
        localStorage.setItem('users', newUsers)
      }
      localStorage.setItem('user', JSON.stringify(candidate));
      navigate('/user');
    }
  };

  return (
    <Form className="registration__form" onSubmit={onSubmit}>
      <Form.Group> 
        <Form.Control
          className="registration__input"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required /> 
        <Form.Control.Feedback type="invalid">
        </Form.Control.Feedback> 
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="registration__input"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required />     
      </Form.Group>
      <Form.Group className="btn_section">
        <Button 
          variant="outline-primary"
          className="btn_section_submit" 
          type="submit">
          Sign In
        </Button>
      </Form.Group>
    </Form> 
  )
};

export default RegistrationForm;