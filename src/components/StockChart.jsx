import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const StockChart = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState("high");

  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: { display: true, text: "Stock Price Chart", color: "white" },
    },
    elements: {
      point: { radius: 1, backgroundColor: "white" },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "white" },
        title: {
          display: true,
          text: "Dates",
          color: "white",
          padding: { bottom: 20 },
        },
      },
      y: {
        grid: { display: true, color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "white" },
        title: {
          display: true,
          text: `${selectedValue.toUpperCase()}`,
          color: "white",
          padding: { bottom: 20 },
        },
      },
    },
  };
  const labels = data?.values?.map((value) => value.datetime);
  const ChartData = {
    labels,
    datasets: [
      {
        id: 1,
        label: "Price",
        data: data?.values?.map((value) => value[selectedValue]),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(124, 155, 1, 0)",
        pointRadius: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      },
    ],
  };


  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-8 h-screen">
      <h2 className="text-white font-bold text-xl md:text-3xl text-center">
        Showing Trends For {data.meta.symbol} in The Last 20 Days.
      </h2>
      <div className="w-full max-w-screen-md mx-auto">
        <div className="chart-container">
          <Line datasetIdKey="id" data={ChartData} options={options} />
        </div>
      </div>
      <div className="flex items-center mt-4 space-y-2 md:space-x-4 flex-row md:justify-center">
        {Object.keys(data?.values[0]).map((value) => (
          <button
            key={value}
            onClick={() => setSelectedValue(value)}
            className={`bg-blue-500 text-white px-3 py-2 rounded-md ${
              selectedValue === value ? "bg-blue-700" : ""
            } ${value === "datetime" ? "hidden" : ""}`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockChart;
