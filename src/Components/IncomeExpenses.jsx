import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Update local storage when transactions change
  useEffect(() => {
    updateLocalStorage();
  }, [transactions]);

  // Function to update local storage
  const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount.filter((transaction) => transaction > 0).reduce((acc, currentValue) => acc + currentValue, 0);
  const expense = amount.filter((transaction) => transaction < 0).reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expense.toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
