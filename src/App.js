import './App.css';
import Navbar from './components/Navbar';
import ProfileContainer from './components/pages/profile/ProfileContainer';
import DialogsContainer from './components/pages/dialogs/DialogsContainer';
import UsersContainer from './components/pages/users/UsersContainer';
import News from './components/pages/news/News';
import Login from './components/login/Login';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';


function App(props) {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />}>
          </Route>
          <Route path='/users/*' element={<UsersContainer />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;