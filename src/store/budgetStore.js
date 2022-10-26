// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'

export default ()  => {
  const store = createStore(( state = { counter: 0 }, action) => {
     switch( action.type ){
      case 'INCREMENT':
          return {
            counter: state.counter + action.incBy
          };
      // case 'DECREMENT':
      //   return {
      //     counter: state.counter - 2
      //   }
      case 'DECREMENT':
        // const subtract = typeof action.decBy === 'number' ? action.decBy : 1;
        return {
          counter: state.counter - action.decBy
        }
      case 'SET':
        return {
          counter: action.setBy
        }
      case "RESET":
        return {
          counter: 0
        }
        default:
          return state
      }   
    });

    return store
}