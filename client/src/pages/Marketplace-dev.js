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



const sdk = new ThirdwebSDK("fantom-testnet");


// comment out line 29
// const contractAddress = "0xa52DcE2FF76Dd159b1B98F40c1239eD332a91f55";
// const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function MarketPlace(){
  const [ isDarkMode, setIsDarkMode ] = useState(true);

const [chosenPair,setChosenPair]=useState("FTMUSD")

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


const activeChain="fantom-testnet";
const [buyAmount,setBuyAmount]=useState(null);
const [sellAmount,setSellAmount]=useState(null);
const [buyPrice,setBuyPrice]=useState(null);
const [sellPrice,setSellPrice]=useState(null);
let buyAddressesArray=[];
let buyAddressesAmountArray=[];
let buyAddressesPriceArray=[];
let Price = null;


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


    return ( 
        
        
        <>
  
<div>
{!address?<div><h2>Make Sure to connect wallet</h2></div>:<ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
}

<div style={{display:'flex'}}>
<div style={{flex:'300px'}}>
<div class="divTableRow">
<div class="divTableCell">Token Name</div>
<div class="divTableCell">Price</div>
<div class="divTableCell">24h Change</div>
</div>
{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
</div>

</div>

<div style={{flex:'300px'}}>

{/* <ApexChartGraphComp></ApexChartGraphComp> */}

<ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />

{
  !address?<div>No wallet connected</div>:<div>My wallet address is {address}</div>}
</div>



<div style={{flex:'300px'}}>
  {address?<Buyers></Buyers>:<p>Connect Wallet</p>}

</div>

</div>
<div style={{display:'flex'}}>
<div className="w-72">
<form>
      <Select value={chosenPair} onChange={handleChange}>
        <Option value="FTMUSD">FTMtoUSD</Option>
        <Option value="FTMETH">FTMtoEth</Option>
      </Select>
    </form>
    </div>
{chosenPair==="FTMUSD"?<iframe style={{aspectRatio: 1200 / 630, width:'100%', height:'fit-content'}} src="https://www.coindesk.com/embedded-chart/mLGwcntwq8DGD" width="100%" frameborder="0"></iframe>
:<iframe style={{aspectRatio: 1200 / 630, width:'100%', height:'fit-content'}} src="https://www.coindesk.com/embedded-chart/LFCBMGkF9cNdn" width="100%" frameborder="0"></iframe>}<div style={{flex:'300px'}}>
    {address?<Sellers></Sellers>:<p>Connect Wallet</p>}
 

{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}







</div>
<div style={{flex:'300px',display:"flex",flexDirection:"row"}}>
<div id="buy" style={{display:"flex",flexDirection:"column"}}>
<h3>Your Token Name:{}</h3>

<h3>Buy</h3>
{buyPrice}
<label>Price</label>

{buyAmount}
<label>Amount</label>
<Input type="number" value={buyAmount} onChange={handleChangeBuyAmount}></Input>
{!buyStatus?
<Web3Button
      contractAddress={""}
      action={(contract) => {contract.call("addWalletAddress",[{address}]).then(()=>{
        
        contract.call("buyTokens",[selectedSeller,selectedSellerQuantity])
        setBuyStatus(true);

      })
    //   buyAddressesArray.push(address);
    //   buyAddressesAmountArray.push(buyAmount());
    // buyAddressesPriceArray.push(buyPrice());
  }}
    >
    Buy
    </Web3Button>
    :<h2>Please Check Your Wallet Soon...</h2>
    }
   
</div>
<div id="sell" style={{display:"flex",flexDirection:"column"}}>
<h3>Sell</h3>
<label>Price{sellPrice}</label>

<Input type="number" value={sellPrice} onChange={handleChangeSellPrice}></Input>
<label>Amount{sellAmount}</label>
<Input type="number" value={sellAmount} onChange={handleChangeSellAmount}></Input>
{!sellStatus?
  <Web3Button
      contractAddress="0x76951647E998F4802ECfB1A3ACADc27400Dfe074"
      action={async (contract) => {
        alert("request sent")
        await contract.call("addWalletAddress",[{address}]);
        await contract.call("sellTokens",[selectedBuyer,selectedQuantity]).then(()=>setSellStatus(true))
          
        }}
      >
      Sell
    </Web3Button>
    :
    <h2>Your Sell Request will finsih soon check your</h2>
    // <Web3Button
    //   contractAddress="contractAddressSeller"
    //   action={(contract) => {contract.call("removeWalletAddress",[{address}]).then(()=>{
    //     setSellStatus(false)
    
    //   })
    //   //   buyAddressesArray.push(address);
    // //   buyAddressesAmountArray.push(buyAmount());
    // // buyAddressesPriceArray.push(buyPrice());
    // }}
    // >
    // Cancel
    // </Web3Button>
}
</div>

</div><div style={{flex:'300px'}}> 
<p>Last Price</p>

</div></div>
</div> 
   

        </>
            
        );
      }
    
      export default MarketPlace;