import React from 'react';
// import '.././App.css';
// import Lottie from 'react-lottie';
// import Particles from 'react-particles-js';
import ComplexNavbar from "../components/Header";
import "../App.css";
import { Web3Button } from "@thirdweb-dev/react";
import ApexChartGraphComp from '../components/Graph';
import {
    Button,
    IconButton,
    Card,
    Input
  } from "@material-tailwind/react";
import { useContractRead, useContract } from "@thirdweb-dev/react";

async function MarketPlace() {
    
const { data: contract } = useContract("{{contract_address}}");
const { data, isLoading, error } = useContractRead(contract, "functionName");

var nextScreen = await sdk.wallet.IsConnected();


    return ( 
        
        
        <div>

{nextScreen ? 
<ThirdwebProvider activeChain="ethereum">
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

<ApexChartGraphComp/>

</div>



<div style={{flex:'300px'}}>
<div class="divTableRow">
<div class="divTableCell">Price</div>
<div class="divTableCell">Amount</div>
<div class="divTableCell">Total</div>
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

</div>
<div style={{display:'flex'}}>

<div style={{flex:'300px'}}>
<div class="divTableRow">
<div class="divTableCell">Price</div>
<div class="divTableCell">Amount</div>
<div class="divTableCell">Time</div>
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
<div style={{flex:'300px',display:"flex",flexDirection:"row"}}>
<div id="buy" style={{display:"flex",flexDirection:"column"}}>
<h3>Buy</h3>
<label>Price</label>
<Input></Input>
<label>Amount</label>
<Input></Input>
<label>Price</label>
<Input></Input>
<Button>Buy</Button>

</div>
<div id="sell" style={{display:"flex",flexDirection:"column"}}>
<h3>Sell</h3>
<label>Price</label>
<Input></Input>
<label>Amount</label>
<Input></Input>
<label>Price</label>
<Input></Input>
<Button>Sell</Button>

</div>

</div><div style={{flex:'300px'}}> 
<p>Last Price</p>

</div></div></ThirdwebProvider> : <ThirdwebProvider activeChain="ethereum">
<Web3Button contractAddress="{{contract_address}}" action={async (contract) => contract.call("myFunctionName")}>
</Web3Button>
</ThirdwebProvider>
}      
           
</div> 
        
     );
}

export default MarketPlace;