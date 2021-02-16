import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  // get global data
  const { transactions } = useContext(GlobalContext);

  // get amounts as array
  const amounts = transactions.map((transaction) => transaction.amount);

  // calc: total amounts
  const total = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}

export default Balance;
