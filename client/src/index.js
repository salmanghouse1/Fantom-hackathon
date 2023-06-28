import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { ThirdwebProvider} from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";

// const activeChain = "ethereum";
const root = ReactDOM.createRoot(document.getElementById('root'));

const activeChain="fantom-testnet";
root.render(
  <React.StrictMode>
    
    <ThirdwebProvider activeChain={activeChain}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();