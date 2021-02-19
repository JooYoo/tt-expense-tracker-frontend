import {
  GET_TRANSACTIONS,
  POST_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from './transaction/TransactionTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };

    case POST_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload,
        ),
      };

    case TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { AppReducer };
