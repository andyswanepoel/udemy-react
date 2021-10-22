import { useState } from "react"

import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import Card from "../UI/Card"

import { yearString } from "../../helpers/helpers"

const Expenses = ({ expenses, setExpenses }) => {
	const [selectedYear, setSelectedYear] = useState(yearString(new Date()));

	const filteredExpenses = expenses.filter(expense => yearString(expense.date) === selectedYear)
	
	const handleYearChange = (year) => {
		setSelectedYear(year);
	}

	return (
		<Card className="expenses">
			<ExpensesFilter onYearChange={handleYearChange} selectedYear={selectedYear}/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} selectedYear={selectedYear}/>
		</Card>
	)
}

export default Expenses;