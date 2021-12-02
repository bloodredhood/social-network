import './index.css';
import store from "./redux/reduxStore"
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {rerenderEntireTree(store.getState())})