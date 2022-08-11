import { Routes, Route } from 'react-router-dom';
import Registration from '../components/Registration';
import User from '../components/UserPage';
import NewUser from '../components/NewUser';
import NewUserPage from '../components/NewUserPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/user" element={<User />} />
        <Route path="/newuser/:userId" element={<NewUser />} />
        <Route path="/newuserpage/:userId/:username" element={<NewUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
