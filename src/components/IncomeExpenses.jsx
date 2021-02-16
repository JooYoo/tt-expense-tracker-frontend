import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
  // get date from GlobalState
  const { transactions } = useContext(GlobalContext);

  // get amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // calc: income
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  // calc: expense
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
