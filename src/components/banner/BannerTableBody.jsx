import React from 'react'
import { useNavigate } from 'react-router-dom'

const BannerTableBody = ({stock}) => {
  const navigate=useNavigate()
  return (
    <tr
    key={stock.meta.symbol}
    className="h-20 hover:cursor-pointer"
    onClick={() => navigate(`/stock/${stock.meta.symbol}`)}
  >
    <td className="border-b text-left">{stock.meta.symbol}</td>
    <td className="border-b text-left">
      {stock.values[0].close}
    </td>
    <td className="border-b text-left">{stock.values[0].high}</td>
    <td className="border-b text-left">{stock.values[0].open}</td>
    <td className="border-b text-left">{stock.values[0].low}</td>
    <td className="border-b text-left">
      {stock.values[0].volume}
    </td>
    <td className="border-b text-left">
      {stock.values[0].datetime}
    </td>
  </tr>
  )
}

export default BannerTableBody
