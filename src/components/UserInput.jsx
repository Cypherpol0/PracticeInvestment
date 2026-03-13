import React, {useState} from 'react'

export const UserInput = ({inputValues, onChangeCUI}) => {
  

  return (
    <section id="user-input">
      <div className="input-container">
        <p>
            <label htmlFor="initial-investment-amount">Initial Investment Amount:</label>
            <input type="number" 
            id="initial-investment-amount" 
            name="initial-investment-amount" 
            placeholder="Enter amount in USD" required 
            value={inputValues.initialInvestment}
            onChange={(e) => onChangeCUI('initialInvestment', e.target.value)}/>
        </p>
        <p>
            <label htmlFor="annual-investment-amount">Annual Investment Amount:</label>
            <input type="number" 
            id="annual-investment-amount" 
            name="annual-investment-amount" 
            placeholder="Enter amount in USD" required 
            value={inputValues.annualInvestment}
            onChange={(e) => onChangeCUI('annualInvestment', e.target.value)}/>
        </p>
        <p>
            <label htmlFor="expected-return-amount">Expected Return Investment Amount:</label>
            <input type="number" 
            id="expected-return-amount" 
            name="expected-return-amount" 
            placeholder="Enter amount in USD" required 
            value={inputValues.expectedReturn}
            onChange={(e) => onChangeCUI('expectedReturn', e.target.value)}/>
        </p>
        <p>
            <label htmlFor="years-invested">Years Invested:</label>
            <input type="number" 
            id="years-invested" 
            name="years-invested" 
            placeholder="Enter number of years" required 
            value={inputValues.yearsInvested}
            onChange={(e) => onChangeCUI ('yearsInvested', e.target.value)}/>
        </p>
    
      </div>
    </section>
  )
}
