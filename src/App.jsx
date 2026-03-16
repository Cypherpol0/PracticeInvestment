import { Header } from './components/Header'
import { UserInput } from './components/UserInput'
import './App.css'
import { OutputData } from './components/OutputData'
import { useState } from 'react'

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    yearsInvested: 0
  })

  function callUserInput(inputId, val) {
    setInputValues(prev => ({
      ...prev,
      [inputId]: +val
    }));
  }

  return (
    <>
    <Header />
    <UserInput inputValues={inputValues} onChangeCUI = {callUserInput}/>
    <OutputData inputVal={inputValues}/>
    </>
  )
}

export default App
