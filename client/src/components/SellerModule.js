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




function SellerModule(props) {
  const [sdkChain,setSdkChain]= useState("fantom-testnet");
  const [SellAmount,setSellAmount]=useState(null);
  const sdk = new ThirdwebSDK(sdkChain);
  const [chosenPair2,setChosenPair2]=useState("FTMUSD");
  const [returnAmount,setReturnAmount]=useState(null);
  const [returnAmount2,setReturnAmount2]=useState(null);
  

  const [sellPrice,setSellPrice]=useState(null);
  const [SellStatus,setSellStatus]=useState(false);
  const handleChangeSellAmount = (event) => {
    setSellAmount(event.target.value);
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
    <div id="Sell" style={{display:"flex",flexDirection:"column"}}>
    
    <label>Price</label>
    
          <Select onChange={handleChange2}>
            <Option value="ftmUsdc">FTMtoUSDC</Option>
            <Option value="ftmEth">FTMtoEth</Option>
            <Option value="UsdcFtm">USDCtoEth</Option>
            <Option value="ethFtm">USDCtoEth</Option>
          </Select>
        
    {SellAmount}
    <label>Amount</label>
    <Input type="number" value={SellAmount} onChange={handleChangeSellAmount}></Input>
    <label>Asking quantity in return</label>
    <Input type="number" value={returnAmount} onChange={handleChangeReturnAmount}></Input>
    <label>Choose A Position</label>
    <Input type="number" min="1" max="10" value={position} onChange={handleChangePosition}></Input>

    {!SellStatus||!SellAmount||!returnAmount||!chosenPair2?
   
    <Web3Button
          contractAddress={"0x5C066A4E673EfDc91c7c9880f068B95752119994"}
          action={(contract) => {contract.call("addUser",[position,props.myAddress,SellAmount,returnAmount,chosenPair2]).then(()=>{
            
            // contract.call("SellTokens",[selectedSeller,selectedSellerQuantity])
            setSellStatus(true);
    
          })
        //   SellAddressesArray.push(address);
        //   SellAddressesAmountArray.push(SellAmount());
        // SellAddressesPriceArray.push(SellPrice());
      }}
        >
        Sell
        </Web3Button>
        :<h2>Added to Sell List Please Check Your Wallet Soon...</h2>
        }
     
    </div> </div>);
}

export default SellerModule;