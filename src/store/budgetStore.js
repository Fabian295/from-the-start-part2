// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'

export default ()  => {
  const store = createStore(( state = { counter: 0 }, action) => {
      action.type === 'INCREMENT'
      return {
        counter: state.counter + 1
      }
    });

    return store
}