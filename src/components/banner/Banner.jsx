import React, { useState } from "react";
import { useSelector } from "react-redux";

import BannerTableBody from "./BannerTableBody";

const Banner = () => {

  const [searchedStock, setSearchedStock] = useState("");
  const tableTitle = [
    "Symbol",
    "Close",
    "High",
    "Open",
    "Low",
    "Volume",
    "Date",
  ];
  const stocksData = useSelector((state) => state.stock.data);
  const [stocks, setStocks] = useState(stocksData);

  const stockFilterHandler = (e) => {
    const value = e.target.value;
    setSearchedStock(value);
    const filteredStocks = stocksData.filter((stock) =>
      stock.meta.symbol.includes(value.toUpperCase())
    );
setStocks(filteredStocks);
  };
const loading = useSelector((state) => state.stock.status);
  const error = useSelector((state) => state.stock.error);

  return (
    <div className="py-6 px-4 md:px-8 bg-slate-900 w-full h-screen text-white flex flex-col items-center gap-6">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Welcome To StocksMania
      </h1>
      <h2 className="text-base md:text-xl font-normal text-slate-300 text-center">
        Get Latest Info about All the Stocks in the Market.
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-400 text-center">
        Various Stocks Latest Details.
      </h2>
      <div className="w-full mt-4 md:mt-8">
        <div>
          <input
            className="w-full mb-4 md:mb-8 bg-slate-800 h-10 p-4 border rounded-sm"
            value={searchedStock}
            onChange={stockFilterHandler}
            type="text"
            placeholder="Search For Stocks.."
          />
        </div>
        {loading === "loading" && <h1>Loading.......</h1>}
        {loading === "failed" && <h1>{error}</h1>}
        {loading === "succeeded" && (
          <table className="table-auto w-full border-collapse border-b border-zinc-100">
            <thead>
              <tr className="text-black bg-yellow-300 ">
                {tableTitle.map((title) => (
                  <th className="pb-2 md:pb-4 text-left">{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stocks?.map((stock) => (
               <BannerTableBody stock={stock}/>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Banner;
