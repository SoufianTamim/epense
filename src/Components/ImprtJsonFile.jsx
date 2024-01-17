import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { saveAs } from "file-saver";

const ImportJsonFile = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [jsonData, setJsonData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const content = e.target.result;
        const importedData = JSON.parse(content);

        // Handle the imported data as needed
        // For example, update the local storage or perform any other actions
        console.log("Imported Data:", importedData);

        // Assuming importedData is an array of transactions
        importedData.forEach((transaction) => {
          addTransaction(transaction);
        });

        setJsonData(importedData);

        // Reset the input field
        fileInputRef.current.value = "";
      };

      fileReader.readAsText(file);
    } catch (error) {
      console.error("Error importing file:", error);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} accept=".json" ref={fileInputRef} />
    </>
  );
};

export default ImportJsonFile;
