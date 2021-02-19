import axios from 'axios';
import {
  GET_TRANSACTIONS,
  POST_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from './TransactionTypes';

// get transactions from API
const getTransactions = async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/transactions');
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error,
    });
  }
};

// post new transaction to API
const addTransaction = async (dispatch, transaction) => {
  // get ready the headers info for http-post
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/v1/transactions', transaction, config);
    dispatch({
      type: POST_TRANSACTION,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error,
    });
  }
};

// delete data from API
const deleteTransaction = async (dispatch, id) => {
  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error,
    });
  }
};

export { getTransactions, addTransaction, deleteTransaction };
