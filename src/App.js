import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/pages/profile/Profile';
import DialogsContainer from './components/pages/dialogs/DialogsContainer';
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
          <Route path='/profile' index element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />}>
          </Route>
          <Route path='/friends' element={<Friends />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;