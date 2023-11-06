import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStockData } from "../store/stockSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(fetchStockData());
  }, []);
  return (
    <div className=" py-0 bg-slate-800 flex  items-center px-20 text-yellow-300 font-bold text-2xl h-16 sticky top-0 left-0">
      <div className="hover:cursor-pointer" onClick={()=>navigate("/")}>StocksMania</div>
    </div>
  );
};

export default Navbar;
