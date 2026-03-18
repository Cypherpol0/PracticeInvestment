import { calcInvestmentResults } from '../utils/InvestmentCalc'

export function OutputData({inputVal}) {
    const resdata = calcInvestmentResults(inputVal)
    const initialInvestment = resdata[0].EndOfYearValue - resdata[0].interest - resdata[0].annualInvestment
  return (
    <table id = "results">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Total Return</th>
        </tr>
      </thead>
      <tbody>
        {resdata.map(yeardata => {
          const totalInterest = yeardata.EndOfYearValue - yeardata.annualInvestment*yeardata.year - initialInvestment
          const totalAmountInvested = yeardata.EndOfYearValue - totalInterest
          return(
          <tr key={yeardata.year}>
            <td>{yeardata.year}</td>
            <td>{yeardata.EndOfYearValue}</td>
            <td>{yeardata.interest}</td>
            <td>{totalInterest.toFixed(2)}</td>
            <td>{totalAmountInvested.toFixed(2)}</td>
          </tr>
          )
          })}
      </tbody>
    </table>
  )
}
