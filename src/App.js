import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/pages/profile/Profile';
import Dialogs from './components/pages/dialogs/Dialogs';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <Dialogs />
    </div >
  );
}

export default App;
