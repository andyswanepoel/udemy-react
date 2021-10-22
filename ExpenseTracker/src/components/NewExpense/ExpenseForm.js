import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = ({ onSaveExpenseData, onHideForm }) => {
	const [formValues, setFormValues] = useState({
		title: "",
		amount: "",
		date: ""
	})

	const changeHandler = (e) => {
		setFormValues((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value }
		});
	}

	const submitHandler = (e) => {
		e.preventDefault();
		onSaveExpenseData({
			title: formValues.title,
			amount: +formValues.amount,
			date: new Date(formValues.date)
		})
		onHideForm();
		setFormValues({
			title: "",
			amount: "",
			date: ""
		});
	}

	const resetHandler = (e) => {
		e.preventDefault();
		onHideForm();
		setFormValues({
			title: "",
			amount: "",
			date: ""
		});
	}

	return (
		<form onSubmit={submitHandler} onReset={resetHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" name="title" value={formValues.title} onChange={changeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" name="amount" min="0.01" step="0.01" value={formValues.amount} onChange={changeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" name="date" min="2019-01-01" max="2022-12-31" value={formValues.date} onChange={changeHandler}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="reset">Cancel</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm;