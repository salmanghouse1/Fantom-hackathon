import React from 'react';
import './App.css';
import Home from './pages/Home';
import MarketPlace from './pages/Marketplace';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from './assets/fantom-logo.svg';
import Layout from './pages/Layout';


function App() {
 
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<MarketPlace />} />
          
        </Route>
      </Routes>
        
     </BrowserRouter>
  );

}


export default App;
