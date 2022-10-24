console.log('new live!')

import React from 'react'
import ReactDOM from 'react-dom/client';
import budgetStore from './store/budgetStore';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/styles.scss';

const store = budgetStore();

console.log(store);
console.log(store.getState());

store.dispatch({
  type: "INCREMENT"
})

console.log(store.getState());

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// console.log('Running from app.js in src folder!');