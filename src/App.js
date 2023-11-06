import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';

function App() {

  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/:stock" element={<StockPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
