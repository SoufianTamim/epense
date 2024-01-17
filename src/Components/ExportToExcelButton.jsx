import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { saveAs } from "file-saver";

const ExportToExcelButton = () => {
  const { transactions } = useContext(GlobalContext);

  const downloadJson = () => {
    const jsonContent = JSON.stringify(transactions, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    saveAs(blob, "transactions.json");
  };

  return (
    <>
      <button className="btn" onClick={downloadJson}>Export to JSON</button>
    </>
  );
};

export default ExportToExcelButton;
