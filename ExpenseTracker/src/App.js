import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

import { DummyData } from "./data/DummyData";

const App = () => {
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
