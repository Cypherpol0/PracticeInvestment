import { calcInvestmentResults } from '../utils/InvestmentCalc'

export function OutputData({inputVal}) {
    const resdata = calcInvestmentResults(inputVal)
  return (
    <p>
      Results: {JSON.stringify(resdata)}
    </p>
  )
}
