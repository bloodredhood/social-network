import './index.css';
import state, { subscribe } from "./redux/state"
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)