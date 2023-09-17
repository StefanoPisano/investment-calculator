import {useState} from "react";
import Header from "./components/Header/Header";
import EntryForm from "./components/EntryForm/EntryForm";
import InvestmentTable from "./components/InvestmentList/InvestmentTable";

function App() {

  const [investments, setInvestments] = useState([]);

  const addInvestment = investment => setInvestments([...investments, investment]);

  return (
    <div>
      <Header/>

      <EntryForm onUpdateInvestment={addInvestment}/>

      <InvestmentTable investments={investments}/>
    </div>
  );
}

export default App;
