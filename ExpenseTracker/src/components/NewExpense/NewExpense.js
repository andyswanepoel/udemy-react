import { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = ({onAddExpense}) => {

	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (newExpense) => {
		const expenseData = {
			...newExpense,
			id: Math.random().toString()
		}
		onAddExpense(expenseData);
	}

	const clickHandler = (e) => {
		setShowForm(true)
	}

	const hideFormHandler = () => {
		setShowForm(false)
	}

	
	return (
		<div className="new-expense">
			{!showForm && <button onClick={clickHandler}>Add New Expense</button>}
			{showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler}/>}
		</div>
	)
}

export default NewExpense;