import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/pages/profile/Profile';
import Dialogs from './components/pages/dialogs/Dialogs';
import Friends from './components/pages/friends/Friends';
import News from './components/pages/news/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App({state}) {

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path='/profile' element={ <Profile posts={state.profilePage.posts}/>} />
            <Route path='/dialogs' element={ <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />} />
            <Route path='/friends' element={ <Friends /> } />
            <Route path='/news' element={ <News /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
