import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // Update local storage when transactions change
  useEffect(() => {
    updateLocalStorage();
  }, [deleteTransaction]);

  // Function to update local storage
  const updateLocalStorage = () => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  return (
    <>
      <li className={transaction.amount >= 0 ? "plus" : "minus"}>
        {transaction.text}
        <span>
          {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
