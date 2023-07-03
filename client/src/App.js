import React from 'react';
// import './App.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage'
import MarketPlace from './pages/Marketplace-dev';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Auctions from './pages/Auction';
import Auctions2 from './pages/Auction2';


function App() {
   return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="auctions" element={<Auctions />} />
        <Route path="auctions2" element={<Auctions2 />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    
  </BrowserRouter>

  );

}


export default App;