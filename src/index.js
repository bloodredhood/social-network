import './index.css';
import store from "./redux/state"
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)