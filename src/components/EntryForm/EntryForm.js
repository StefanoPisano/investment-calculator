import {useState} from "react";

const DEFAULT_STATE = {
	currentSavings: 0,
	yearlyContribution: 0,
	expectedReturn: 0,
	duration: 1
}

function EntryForm(props) {
	const [form, setForm] = useState(DEFAULT_STATE);

	const updateCurrentSavings = event => {
		if (event.target.value) {
			setForm((prevState) => {
				return {...prevState, currentSavings: event.target.value}
			})
		}
	}

	const updateYearlyContribution = event => {
		if (event.target.value) {
			setForm((prevState) => {
				return {...prevState, yearlyContribution: event.target.value}
			})
		}
	}

	const updateExpectedReturn = event => {
		if (event.target.value) {
			setForm((prevState) => {
				return {...prevState, expectedReturn: event.target.value}
			})
		}
	}

	const updateDuration = event => {
		if (event.target.value) {
			setForm((prevState) => {
				return {...prevState, duration: event.target.value}
			})
		}
	}

	const submitNewInvestment = event => {
		event.preventDefault()

		calculateHandler(form);
	}

	const resetForm = () => setForm(DEFAULT_STATE);

	const calculateHandler = userInput => {
		const yearlyData = []; // per-year results

		let currentSavings = +userInput.currentSavings;
		const yearlyContribution = +userInput.yearlyContribution;
		const expectedReturn = +userInput.expectedReturn / 100;
		const duration = +userInput.duration;

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				id: `u${crypto.randomUUID()}`,
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
				initialInvestment: userInput.currentSavings
			});
		}

		props.onUpdateInvestment(yearlyData);
	};


	return (
		<form className="form" onSubmit={submitNewInvestment} onReset={resetForm}>
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input type="number" id="current-savings" value={form.currentSavings}
					       onChange={updateCurrentSavings}/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input type="number" id="yearly-contribution" value={form.yearlyContribution}
					       onChange={updateYearlyContribution}/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input type="number" id="expected-return" value={form.expectedReturn}
					       onChange={updateExpectedReturn}/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input type="number" id="duration" value={form.duration} onChange={updateDuration}/>
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	)
}

export default EntryForm