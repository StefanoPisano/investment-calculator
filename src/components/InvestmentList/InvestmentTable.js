import React from "react";
import Investment from "../InvestmentByYears/Investment";
import styles from "./InvestmentTable.module.css";

function InvestmentTable({investments}) {
	const investmentList = investments.map(inv => <Investment key={crypto.randomUUID()} investment={inv}/>);

	const rows = investmentList.length
		? investmentList
		: <tr>
			<td colSpan="5">No data</td>
		</tr>

	return (
		<table className={styles.result}>
			<thead>
			<tr>
				<th>Year</th>
				<th>Total Savings</th>
				<th>Interest (Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
			</thead>
			<tbody>
			{rows}
			</tbody>
		</table>
	)
}

export default InvestmentTable