import React, { useState } from 'react';
import { useContractEvents, Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x0b12B74445D2e72774d3AAC0834A8530eC2C3573";

const walletAddressesArray=[];
const amountsArray=[];
const returnAmountsArray=[];
function Buyers(){
    const { contract } = useContract(contractAddress);


    const [buyStatus,setBuyStatus]=useState(false);
    const { data, isLoading, error } = useContractRead(contract);

    if (error) {
        console.error("failed to read contract buyer", error);
      }
      else{
        console.log("everything ok");
        console.log("Buyers"+data);
        // console.log(data.walletAddresses);
      }
      // for(i=0;i<data.walletAddresses.length;i++){
      //   walletAddressesArray.push(data.walletAddresses[i]);
       
      //  }
      //  for(i=0;i<data.amounts.length;i++){
      //   amountsArray.push(data.amounts[i]);
       
      //  }
       
      //  for(i=0;i<data.returnAmounts.length;i++){
      //   amountsArray.push(data.amounts[i]);
       
      //  }
    return(
        <div style={{flex:'300px'}}>
        <h2>Buyers</h2>
<div class="divTableRow">

<div class="divTableCell">Buyer</div>
<div class="divTableCell">Amount Sent</div>
<div class="divTableCell">Amount Recieve</div>
<div class="divTableCell">Pair</div>
</div>
{/* 
{isLoading?<p>Is Loading, no buyers yet</p>:data.map((walletAddress)=>{
  console.log("mapped:"+walletAddress);
<div class="divTableRow">
<div class="divTableCell"><h2>{walletAddress}</h2>
</div>    
</div>  
  
  })}
 */}

  


</div>
    )
};

export default Buyers;