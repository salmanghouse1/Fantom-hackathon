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
  const [position,setPosition]= useState(0);

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
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
    <label>Choose A Position</label>
    <Input type="number" min="1" max="10" value={position} onChange={handleChangePosition}></Input>

    {!buyStatus||!buyAmount||!returnAmount||!chosenPair2?
   
    <Web3Button
          contractAddress={"0x5C066A4E673EfDc91c7c9880f068B95752119994"}
          action={(contract) => {contract.call("addUser",[position,props.myAddress,buyAmount,returnAmount,chosenPair2]).then(()=>{
            
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