import { Header } from './components/Header'
import { UserInput } from './components/UserInput'
import './App.css'
import { OutputData } from './components/OutputData'
import { useState } from 'react'
import { calcInvestmentResults } from './utils/InvestmentCalc'
import { generatePDFReport } from './utils/generatereport'

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    yearsInvested: 0
  })

  const userEnterValid = inputValues.yearsInvested >= 1
  function callUserInput(inputId, val) {
    setInputValues(prev => ({
      ...prev,
      [inputId]: +val
    }));
  }

  function handleGeneratePDF() {
    const resdata = calcInvestmentResults(inputValues);
    generatepdf({...inputValues, results: resdata});
  }

  return (
    <>
    <Header />
    <UserInput inputValues={inputValues} onChangeCUI = {callUserInput}/>
    {!userEnterValid && <p className='error'>Please enter a valid number of years (at least 1 year) to see the results.</p>}
    {userEnterValid && <OutputData inputVal={inputValues}/>}
    <div className="center">
      <button onClick = {handleGeneratePDF}>Download PDF Report</button>
    </div>
    </>
  )
}

export default App
