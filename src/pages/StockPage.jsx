import React from 'react'
import StockChart from '../components/StockChart'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StockPage = () => {
    const {stock}=useParams()
    console.log(stock);
    const ParticularStock=useSelector(state=>state.stock.data.find(data=>data.meta.symbol===stock))
    console.log(ParticularStock,'particularrrrrrrrrrrrrrrrrrrrrrrrrrrr');
  return (
    <div className='bg-slate-900'>
        <StockChart data={ParticularStock}/>
      
    </div>
  )
}

export default StockPage

