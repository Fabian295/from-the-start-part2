import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import BudgetSnob from "./BudgetSnob";
import BudgetEdit from "./BudgetEdit";
import BudgetAdd from "./BudgetAdd";
import Header from "./Header";

const App = () => {

  return (
    <div>
      <Header />
      <h4 className="App-h4">The App Component</h4>
      <Routes>
        {/* <Route path="/" component={App} element={<App />} /> */}
        <Route path="/" c
        // omponent={BudgetSnob}
         element={<BudgetSnob />} 
         />
        <Route path="/edit" 
        // component={BudgetEdit} 
        element={<BudgetEdit />} 
        />
        <Route  path="/add"
        element={<BudgetAdd />}
        />
      </Routes>
      {/* <Outlet /> */}
    </div>
  )
}

export default App;