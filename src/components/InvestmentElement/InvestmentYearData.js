import React from "react";

import NumberData from '../NumberData/NumberData'
function InvestmentYearData({investment}) {
	return (
		<tr>
			<td>{investment.year}</td>
			<td><NumberData number={investment.savingsEndOfYear}/></td>
			<td><NumberData number={investment.yearlyInterest}/></td>
			<td><NumberData number={investment.savingsEndOfYear - investment.initialInvestment -investment.yearlyContribution * investment.year}/></td>
			<td><NumberData number={investment.initialInvestment + investment.yearlyContribution * investment.year}/></td>
		</tr>
	)
}

export default InvestmentYearData