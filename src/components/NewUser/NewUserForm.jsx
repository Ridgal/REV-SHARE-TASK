import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const increasSum = (e, username, sum, userId) => {
  e.preventDefault();
  const newuser = JSON.parse(localStorage.getItem('newuser')) || [];
  const users = JSON.parse(localStorage.getItem('users'));

  if (username && sum && users) {

    let foundNewUser = {
      username,
      sum,
    };
    
    const allNewUser = newuser?.filter((i) => {
      if (i.username === username) {
        foundNewUser = {...i};
        foundNewUser.sum = +foundNewUser.sum + +sum;
        return false;
      }
      return true;
    });

    let fountdUser = null;
    const allUser = users?.filter((i) => {
      if (i.id === userId) {
        fountdUser = i;
        return false;
      }
      return true;
    });
    
    if (allUser && fountdUser) {
      const count = (+sum / 100) * 10;
      fountdUser.balance = count + fountdUser.balance;

      localStorage.setItem('users', JSON.stringify([...allUser, fountdUser]));
      localStorage.setItem('user', JSON.stringify(fountdUser));
      localStorage.setItem('newuser', JSON.stringify([...allNewUser, foundNewUser]));
    };
  };
}; 

const NewUserForm = () => {
  const { userId } = useParams();
  const [username, setUsername] = useState('');
  const [sum, setSum] = useState(0);

  const navigate = useNavigate();

  const onSubmit = (e, username, sum, userId) => {
    increasSum(e, username, sum, userId);
    navigate(`/newuserpage/${userId}/${username}`);
  };

  return (
    <Form className="newuser__form" onSubmit={(e) => onSubmit(e, username, sum, userId)}>
      <Form.Group className="newuser__inputgroup">
        <Form.Group> 
          <Form.Control
            className="newuser__input"
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
            className="newuser__input"
            type="number"
            name="sum"
            value={sum}
            onChange={(e) => setSum(+e.target.value)}
            placeholder="Sum"
            required />     
        </Form.Group>
      </Form.Group>
      <Form.Group className="btn_section">
        <Button 
          variant="outline-success"
          className="btn_section_submit" 
          type="submit">
          Top up
        </Button>
      </Form.Group>
    </Form>
  )
};

export default NewUserForm;