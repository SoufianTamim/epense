import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const balance = amount.reduce((acc, currentValue) => acc + currentValue, 0);

  // Update local storage when transactions change
  useEffect(() => {
    updateLocalStorage();
  }, [transactions]);

  // Function to update local storage
  const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {balance >= 0 ? "+" : "-"}${Math.abs(balance).toFixed(2)}
      </h1>
    </>
  );
};

export default Balance;
