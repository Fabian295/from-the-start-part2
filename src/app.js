console.log('new live!')

import React from 'react'
import ReactDOM from 'react-dom/client';
import budgetStore from './store/budgetStore';
// import { Provider } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { increment, decrement, set, reset } from './actions/counterActions'
import App from './components/App';
import './styles/styles.scss';

const store = budgetStore();

// console.log(store);
console.log(store.getState());

const unsubscribe = store.subscribe(()  => {
  console.log(store.getState());
})

store.dispatch(increment())
store.dispatch(increment({incBy: 20}))

store.dispatch( decrement())
store.dispatch( decrement({decBy: 25}))

store.dispatch(set({setBy: 100}))
store.dispatch(reset())

// store.dispatch({
//   type: "INCREMENT"
// });
// console.log(store.getState());

// store.dispatch(   {
//   type: "DECREMENT",
//   decBy: 25
// })

// console.log(store.getState());
// unsubscribe()

// store.dispatch({
//   type: "RESET"
// });

// console.log(store.getState());

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(
  // <Provider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);

// console.log('Running from app.js in src folder!');