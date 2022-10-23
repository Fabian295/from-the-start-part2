console.log('new live!')

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import './styles/styles.scss';


const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(<App />);

// console.log('Running from app.js in src folder!');