import React, { useState } from 'react'
// import { redirect } from 'react-router-dom'
import budgetStore from '../store/budgetStore'
import { increment, decrement } from '../actions/counterActions'


const BudgetSnob = () => {
// const [counter, setCounter] = useState(0)
const [count, setCount] = useState(0)

// const handleInc = () => {
//   setCounter(counter + 1)
// }
// const handleDec = () => {
//   setCounter(counter - 1)
// }

const store = budgetStore();

// let count;

function render() {

  const state = store.getState()
  setCount(count + state.counter)
  // count = count + state.counter

  console.log(count)
  // return count
};
// render();

const renderDec = () => {

  const state = store.getState()
  setCount(count - state.counter)
}

  store.subscribe(render, renderDec);
  // store.subscribe(renderDec);

  return (
    <div>BudgetSnob
      <div className="counter-div">
        {/* <h1 className='counter'>{counter}</h1> */}
        <h1 >{count}</h1>
        {/* { count && <h1>{ count }</h1> } */}
        {/* <p>
          <button onClick={handleInc}>
          Increment
          </button>
          <button onClick={handleDec}>
          Decrement
          </button>
        </p> */}
        <p>
          <button onClick={( ) => {
              // count = count + store.getState().counter
            //   store.dispatch({
            //     type: "INCREMENT",
            //   //  adding
            //   })
            //   console.log(typeof count, count, state.counter)
            //     // return state.counter
                
                store.dispatch(increment({incBy: 7}))
                console.log(count)
              }
            }>
            Store Increment
          </button>

          <button data-clr={"red"} onClick={ () => { 
        //     store.dispatch({
        //     type: 'DECREMENT',
        //     decBy: 10
        //  }) 

        store.dispatch(decrement({decBy: 15}))
      
          console.log(count)
          }}>Store Decrement</button>
        </p>
      </div>
      
    </div>
  )
}

export default BudgetSnob

// () => store.subscribe(()  => store.getState())