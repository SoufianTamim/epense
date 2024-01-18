import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div id="history">
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
