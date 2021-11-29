import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/pages/profile/Profile';
import Dialogs from './components/pages/dialogs/Dialogs';
import Friends from './components/pages/friends/Friends';
import News from './components/pages/news/News';
import { Routes, Route } from 'react-router-dom';


function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/profile' index element={<Profile profilePage={props.state.profilePage}  dispatch={props.dispatch} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}>
          </Route>
          <Route path='/friends' element={<Friends />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
