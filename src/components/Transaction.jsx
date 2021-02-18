import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {
  // get deleteTransaction()
  const { deleteTransaction } = useContext(GlobalContext);

  // confirm sign
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
