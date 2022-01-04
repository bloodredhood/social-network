import './App.css';
import Navbar from './components/Navbar';
import ProfileContainer from './components/pages/profile/ProfileContainer';
import DialogsContainer from './components/pages/dialogs/DialogsContainer';
import UsersContainer from './components/pages/users/UsersContainer';
import News from './components/pages/news/News';
import Login from './components/login/Login';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/authReducer';


const App = (props) => {

  props.getAuthUserData()

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
  )
}


export default connect(null, { getAuthUserData })(App)