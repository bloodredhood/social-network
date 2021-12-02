import './index.css';
import store from "./redux/reduxStore"
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

const rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())

store.subscribe(() => { rerenderEntireTree(store.getState()) })