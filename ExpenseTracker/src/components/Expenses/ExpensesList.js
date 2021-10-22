import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"

const ExpensesList = ({filteredExpenses, selectedYear}) => {

	if (filteredExpenses.length === 0) {
		return <p className="expenses-list__fallback">There are no expenses for {selectedYear}.</p>
	}

	return (
		<ul className="expenses-list">
			{filteredExpenses.map(expense => (
				<ExpenseItem 
					key={expense.id} 
					title={expense.title} 
					amount={expense.amount} 
					date={expense.date} />
				)
			)}
		</ul>
	)
}

export default ExpensesList;