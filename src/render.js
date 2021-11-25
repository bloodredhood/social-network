import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}