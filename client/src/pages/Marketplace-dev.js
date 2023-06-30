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

import { ThemeProvider } from "@material-tailwind/react";
import { Polygon } from "@thirdweb-dev/chains";
import dayjs from 'dayjs' 
import helloWorldabi from '../abi/helloWorld.json';
import ApexChartGraphComp from '../components/Graph';
import ChooseToken from './chooseToken';
import Sellers from '../components/Sellers';
import Buyers from '../components/Buyers';
import BuyerModule from "../components/BuyerModule";






// comment out line 29
// const contractAddress = "0xa52DcE2FF76Dd159b1B98F40c1239eD332a91f55";
// const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function MarketPlace(){
  const [ isDarkMode, setIsDarkMode ] = useState(true);
  
  const [sdkChain,setSdkChain]= useState("fantom-testnet");
  
  const sdk = new ThirdwebSDK(sdkChain);

const [chosenPair,setChosenPair]=useState("FTMUSD");
const [chosenPair2,setChosenPair2]=useState("FTMUSD");

const [buyStatus,setBuyStatus]=useState(false);

const [sellStatus,setSellStatus]=useState(false);

const address = useAddress();

const [value1,setValue1]=useState('');

const [value2,setValue2]=useState('');

const [value3,setValue3]=useState('');

const [value4,setValue4]=useState('');
// const desiredChainId=ChainId.Fantom;

  // ThirdwebSDK sdk = new ThirdwebSDK("ethereum");
const {contract2}=useContract("0x87f23361137baE1351191d2aD799b3f081fbc8dd");




  // comment out 56,57


// const { data: contract } = useContract("{{contract_address}}");
// const { data, isLoading, error } = useContractRead(contract, "functionName");

// var nextScreen = await sdk.wallet.IsConnected();


const [buyAmount,setBuyAmount]=useState(null);

const [returnAmount,setReturnAmount]=useState(null);
const [returnAmount2,setReturnAmount2]=useState(null);

const [sellAmount,setSellAmount]=useState(null);
const [buyPrice,setBuyPrice]=useState(null);
const [sellPrice,setSellPrice]=useState(null);
let buyAddressesArray=[];
let buyAddressesAmountArray=[];
let buyAddressesPriceArray=[];
let Price = null;


const handleChangeReturnAmount = (event) => {
  setReturnAmount(event.target.value);
};


const handleChangeReturnAmount2 = (event) => {
  setReturnAmount2(event.target.value);
};

const handleChangeBuyAmount = (event) => {
  setBuyAmount(event.target.value);
};

const handleChangeSellAmount = (event) => {
  setSellAmount(event.target.value);
};


const handleChangeSellPrice = (event) => {
  setSellPrice(event.target.value);
};


const handleChangeBuyPrice = (event) => {
  setBuyPrice(event.target.value);
};

const handleChange=(event)=>{
  setChosenPair(event.target.value)
}

const handleChange2=(event)=>{
  setChosenPair2(event.target.value)
}

const handleChangeSDK=(event)=>{
  setSdkChain(event.target.value)
}

    return ( 
        
        
        <>
  
<div>
{!address?<div><h2>Make Sure to connect wallet</h2></div>:<ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
}



<div style={{flex:'300px'}}>

{/* <ApexChartGraphComp></ApexChartGraphComp> */}



{
  !address?<div>No wallet connected</div>:<div>My wallet address is {address}</div>}
</div>

</div>

<div style={{flex:'300px'}}>
  {address?<Buyers></Buyers>:<p>Connect Wallet To see Buyers</p>}

</div>

<div style={{display:'flex'}}>
<div className="w-72">

      <Select value={chosenPair} onChange={handleChange}>
        <Option value="ftmUsdc">FTMtoUSDC</Option>
        <Option value="ftmEth">FTMtoEth</Option>
        <Option value="UsdcFtm">USDCtoEth</Option>
        <Option value="ethFtm">USDCtoEth</Option>
      </Select>
   
    </div>
{chosenPair==="FTMUSD"?<iframe style={{aspectRatio: 1200 / 630, width:'100%', height:'fit-content'}} src="https://www.coindesk.com/embedded-chart/mLGwcntwq8DGD" width="100%" frameborder="0"></iframe>
:<iframe style={{aspectRatio: 1200 / 630, width:'100%', height:'fit-content'}} src="https://www.coindesk.com/embedded-chart/LFCBMGkF9cNdn" width="100%" frameborder="0"></iframe>}<div style={{flex:'300px'}}>
    {address?<Sellers></Sellers>:<p>Connect Wallet To See Sellers</p>}
 






</div>
<div style={{flex:'300px',display:"flex",flexDirection:"row"}}>
<div id="buy" style={{display:"flex",flexDirection:"column"}}>
<h3>Your Token Name:{}</h3>

<h3>Buy</h3>
<BuyerModule myAddress={address}></BuyerModule>
 
</div>
<div id="sell" style={{display:"flex",flexDirection:"column"}}>
<h3>Sell</h3>

<label>Amount{sellAmount}</label>
<Input type="number" value={sellAmount} onChange={handleChangeSellAmount}></Input>
<label>Asking quantity in return</label>
<Input type="number" value={returnAmount2} onChange={handleChangeReturnAmount2}></Input>

{!sellStatus?
  <Web3Button
      contractAddress="0x76951647E998F4802ECfB1A3ACADc27400Dfe074"
      action={async (contract) => {
        alert("request sent")
        await contract.call("addWalletAddress",[address,buyAmount,returnAmount2,chosenPair]);
        // await contract.call("sellTokens",[selectedBuyer,selectedQuantity]).then(()=>setSellStatus(true))
          
        }}
      >
      Sell
    </Web3Button>
    :
    <h2>Added to sell list Your Sell Request will finsih soon check your</h2>
    
}
</div>

</div></div>

   

        </>
            
        );
      }
    
      export default MarketPlace;