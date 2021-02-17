import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // get data once
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
