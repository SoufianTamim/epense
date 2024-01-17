import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import ExportToExcelButton from "./ExportToExcelButton";



// Comment out or remove the following line if AppReducer.js doesn't exist
// import AppReducer from "./AppReducer";

const AddTransaction = () => {
  const { transactions, addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: Number(amount),
    };

    // Add transaction to global state
    addTransaction(newTransaction);

    // Clear input fields
    setText("");
    setAmount("");
  }

  return (
    <>
      <h3>new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        <ExportToExcelButton />
    </>
  );
};

export default AddTransaction;
