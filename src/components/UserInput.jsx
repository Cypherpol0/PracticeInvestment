import React from 'react'

export const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-container">
        <p>
            <label htmlFor="initial-investment-amount">Initial Investment Amount:</label>
            <input type="number" id="initial-investment-amount" name="initial-investment-amount" placeholder="Enter amount in USD" required/>
        </p>
        <p>
            <label htmlFor="annual-investment-amount">Annual Investment Amount:</label>
            <input type="number" id="annual-investment-amount" name="annual-investment-amount" placeholder="Enter amount in USD" required/>
        </p>
        <p>
            <label htmlFor="expected-return-amount">Expected Return Investment Amount:</label>
            <input type="number" id="expected-return-amount" name="expected-return-amount" placeholder="Enter amount in USD" required/>
        </p>
        <p>
            <label htmlFor="investment-amount">Investment Amount:</label>
            <input type="number" id="investment-amount" name="investment-amount" placeholder="Enter amount in USD" required/>
        </p>
    
      </div>
    </section>
  )
}
