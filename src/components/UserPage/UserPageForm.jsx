import { PersonSquare } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './UserPage.scss';

const UserPageForm = () => {

  const data = localStorage.getItem('user');
  const user = JSON.parse(data);

  return (
    <div className="main__page">
      <div className="main__header">
        <div className="main__user" key={user.id}>
          <div className="main__user__title">
            <p className="title_desc"><PersonSquare /></p> 
            {user.username}
          </div>
          <div className="main__user__title">
            <p className="title_desc">Balance:</p> 
            {user.balance} $
          </div>
        </div> 
      </div>
      <hr className='hr' />
      <div className="main__body">
          
      </div>
      <hr className='hr' />
      <div className="main__footer">
        <h2>Create a unique link...</h2>
        <Link
          className="main__footer_btn"
          to={`/newuser/${user.id}`}
          target='_blank'>
          Create
        </Link> 
      </div>
    </div>
  )
};

export default UserPageForm;