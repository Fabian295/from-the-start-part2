// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expensesReducer';
import filterReducer from '../reducers/filterReducer'; 

const stateDemo = {
  expenses: [{
    id: '123def654ghij',
    description: 'Rental Truck',
    note: 'because it was a cyber truck',
    amount: 1,
    createAt: 0
  }],
  filters: {
    keyword: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
}

export default () => {
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  }))

  return store
}

//  const counterReducer = ( state = { counter: 0 }, action) => {
//      switch( action.type ){
//       case 'INCREMENT':
//           return {
//             counter: state.counter + action.incBy
//           };
//       // case 'DECREMENT':
//       //   return {
//       //     counter: state.counter - 2
//       //   }
//       case 'DECREMENT':
//         // const subtract = typeof action.decBy === 'number' ? action.decBy : 1;
//         return {
//           counter: state.counter - action.decBy
//         }
//       case 'SET':
//         return {
//           counter: action.setBy
//         }
//       case "RESET":
//         return {
//           counter: 0
//         }
//         default:
//           return state
//       }   
//     }
    
//     export default ()  => {
//       const store = createStore(counterReducer);

//     return store
// }