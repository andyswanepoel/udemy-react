import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

const ExpenseItem = ({id, title, amount, date}) => {

	return (
		<Card elTag="li" className="expense-item">
			<ExpenseDate date={date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<p className="expense-item__price">${amount}</p>
			</div>
		</Card>
	)
}

export default ExpenseItem;