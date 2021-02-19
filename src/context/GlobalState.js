import React, { createContext, useReducer } from 'react';

import { AppReducer } from './AppReducer';
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from './transaction/TransactionActions';

// init state
const initState = {
  transactions: [],
  error: null,
  loading: true,
};

// create context
const GlobalContext = createContext(initState);

// create Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions: () => getTransactions(dispatch),
        addTransaction: (transaction) => addTransaction(dispatch, transaction),
        deleteTransaction: (id) => deleteTransaction(dispatch, id),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
