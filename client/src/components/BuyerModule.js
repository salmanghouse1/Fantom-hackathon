import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import React,{Component, useState,componentDidMount} from 'react';
import {
  Button,
  IconButton,
  Card,
  Input,Select,Option
} from "@material-tailwind/react";
// import '.././App.css';
// import Lottie from 'react-lottie';
// import Particles from 'react-particles-js';
import ComplexNavbar from "../components/Header";
import "../App.css";
import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";




function BuyerModule(props) {
  const [sdkChain,setSdkChain]= useState("fantom-testnet");
  const [buyAmount,setBuyAmount]=useState(null);
  const sdk = new ThirdwebSDK(sdkChain);
  const [chosenPair2,setChosenPair2]=useState("FTMUSD");
  const [returnAmount,setReturnAmount]=useState(null);
  const [returnAmount2,setReturnAmount2]=useState(null);
  
  const [sellAmount,setSellAmount]=useState(null);
  const [buyPrice,setBuyPrice]=useState(null);
  const [sellPrice,setSellPrice]=useState(null);
  const [buyStatus,setBuyStatus]=useState(false);
  const handleChangeBuyAmount = (event) => {
    setBuyAmount(event.target.value);
  };
  const handleChangeReturnAmount = (event) => {
    setReturnAmount(event.target.value);
  };
      const handleChange2=(e)=>{
        setChosenPair2(e);
      }

return (<div style={{flex:'300px',display:"flex",flexDirection:"row"}}>
    <div id="buy" style={{display:"flex",flexDirection:"column"}}>
    
    {buyPrice}
    <label>Price</label>
    
          <Select onChange={handleChange2}>
            <Option value="ftmUsdc">FTMtoUSDC</Option>
            <Option value="ftmEth">FTMtoEth</Option>
            <Option value="UsdcFtm">USDCtoEth</Option>
            <Option value="ethFtm">USDCtoEth</Option>
          </Select>
        
    {buyAmount}
    <label>Amount</label>
    <Input type="number" value={buyAmount} onChange={handleChangeBuyAmount}></Input>
    <label>Asking quantity in return</label>
    <Input type="number" value={returnAmount} onChange={handleChangeReturnAmount}></Input>
    {!buyStatus||!buyAmount||!returnAmount||!chosenPair2?
    <Web3Button
          contractAddress={"0x0b12B74445D2e72774d3AAC0834A8530eC2C3573"}
          action={(contract) => {contract.call("addWalletAddress",[props.myAddress,buyAmount,returnAmount,chosenPair2]).then(()=>{
            
            // contract.call("buyTokens",[selectedSeller,selectedSellerQuantity])
            setBuyStatus(true);
    
          })
        //   buyAddressesArray.push(address);
        //   buyAddressesAmountArray.push(buyAmount());
        // buyAddressesPriceArray.push(buyPrice());
      }}
        >
        Buy
        </Web3Button>
        :<h2>Added to Buy List Please Check Your Wallet Soon...</h2>
        }
     
    </div> </div>);
}

export default BuyerModule;