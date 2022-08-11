import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PersonSquare } from 'react-bootstrap-icons';
import { Form, Button } from 'react-bootstrap';

import { increasSum } from '../NewUser/NewUserForm';

import './NewUserPage.scss';

const NewUserPageForm = () => {

  const params = useParams();

  const [newusers, setNewUsers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('newuser');
    setNewUsers(JSON.parse(data));
  }, [])
  const [sum, setSumma] = useState(0);
  
  const found = newusers.find((i) => i.username === params.username);

  const onSubmit = (e) => {
    e.preventDefault();
    increasSum(e, params.username, sum, params.userId);
    const data = localStorage.getItem('newuser');
    setNewUsers(JSON.parse(data));
  };

  if (!found) {
    return (
      <>
        loading
      </>
    )
  };

  return (
    <div className="main__page">
      <div className="main__header">
        <div className="main__newUserPage" >
          <div className="main__newUserPage__title">
            <p className="title_desc"><PersonSquare /></p> 
            {found.username}
          </div>
          <div className="main__newUserPage__title">
            <p className="title_desc">Balance:</p> 
            {found.sum} $
          </div>
        </div> 
      </div>
      <hr className='hr' />
      <div className="main__body">
        <div className="main__body_form">
          <h2>Replenish the <br /> balance</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
                className="main__input"
                type="number"
                name="sum"
                value={sum}
                onChange={(e) => setSumma(+e.target.value)}
                placeholder="Sum"
                required />
            </Form.Group>
            <Form.Group className="btn_section">
              <Button 
                variant="outline-primary"
                className="btn_section_submit" 
                type="submit">
                Replenish
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      <hr className='hr' />
      <div className="main__footer">
        
      </div>
    </div>
  )
};

export default NewUserPageForm;