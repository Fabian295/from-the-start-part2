// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'

export default ()  => {
  const store = createStore(( state = { counter: 0 }, action) => {
     switch( action.type ){
      case 'INCREMENT':
          return {
            counter: state.counter + 10
          };
      case 'DECREMENT':
        return {
          counter: state.counter - 2
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