export function calcInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    yearsInvested}) 
       
    {
        const results = [];
        let currentInvestment = initialInvestment;

        for (let i = 0; i <= yearsInvested; i++) {
            const interestEarned = currentInvestment * (expectedReturn / 100);
            currentInvestment += interestEarned + annualInvestment;
            results.push({
                year: i + 1,
                interest: interestEarned.toFixed(2),
                EndOfYearValue: currentInvestment.toFixed(2),
                annualInvestment: annualInvestment.toFixed(2)
            });
        }
        return results;
    }

    // Lesson 3 at 10:20 for formatter
