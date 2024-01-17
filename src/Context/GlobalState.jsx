import { createContext, useReducer, useEffect } from "react";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "remove":
      return {
        transactions: state.transactions.filter((transaction) => transaction.id !== action.value),
      };
    case "addTransaction":
      return {
        transactions: [...state.transactions, action.value],
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  // Load initial state from local storage
  const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || initialState.transactions;

  const [state, dispatch] = useReducer(Reducer, {
    transactions: storedTransactions,
  });

  // Update local storage on state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  function deleteTransaction(id) {
    dispatch({ type: "remove", value: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "addTransaction", value: transaction });
  }

  return <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>{children}</GlobalContext.Provider>;
};
