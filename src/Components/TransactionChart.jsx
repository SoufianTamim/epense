import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Chart from "chart.js/auto";

const TransactionChart = () => {
  const { transactions } = useContext(GlobalContext);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      // Destroy the existing chart
      chartInstance.current.destroy();
    }

    // Separate transactions into income and expense arrays
    const incomeTransactions = transactions.filter((transaction) => transaction.amount > 0);
    const expenseTransactions = transactions.filter((transaction) => transaction.amount < 0);

    // Calculate total income and total expenses
    const totalIncome = incomeTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const totalExpenses = Math.abs(expenseTransactions.reduce((sum, transaction) => sum + transaction.amount, 0));

    // Create a doughnut chart
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            data: [totalIncome, totalExpenses],
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }, [transactions]);

  // Cleanup function
  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        // Destroy the chart when the component is unmounted
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "300px", height: "300px" }}></canvas>;

};

export default TransactionChart;
