import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transactions, clearTransactions } = useContext(GlobalContext);

    const handleClearTransactions = () => {
      // Call the clearTransactions function from the global context
      clearTransactions();
    };

  return (
    <div id="history">
      <h3>History</h3>
      <button className="btn-del" onClick={handleClearTransactions}>
        Clear History
      </button>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
