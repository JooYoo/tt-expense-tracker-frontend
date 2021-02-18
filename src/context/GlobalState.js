import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { AppReducer } from './AppReducer';

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

  // Actions
  const getTransactions = async () => {
    try {
      // get data from endpoint
      const res = await axios.get('/api/v1/transactions');

      // dispatch the data and reducer-switch-case
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      // delete data from endpoint
      await axios.delete(`/api/v1/transactions/${id}`);
      // dispatch the data and reducer-case
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    // get ready the headers info for http-post
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // add data to endpoint
      const res = await axios.post('/api/v1/transactions', transaction, config);

      // dispatch the data and
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
