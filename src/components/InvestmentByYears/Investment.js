import React from "react";
import InvestmentYearData from "../InvestmentElement/InvestmentYearData";

function Investment({investment}) {
	const investmentByYear = investment.map(inv => <InvestmentYearData key={inv.id} investment={inv}/>)

	return (
		<>
			{investmentByYear}
		</>
	)
}

export default Investment;