import React, { useState } from 'react';

import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x2951421c7Ee414Afb5a689B63b8A7b936024ADd1";

const walletAddressesArray=[];
const amountsArray=[];
const returnAmountsArray=[];
function Buyers(){
    const { contract } = useContract(contractAddress);


    const [buyStatus,setBuyStatus]=useState(false);
    const { data, isLoading, error } = useContractRead(contract, "getAllWalletAddresses");
  
    if (error) {
        console.error("failed to read contract buyer", error);
      }
      else{
        console.log("everything ok");
        console.log(data);
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

{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}
{isLoading?<p>Is Loading, no buyers yet</p>:data.map((buyAddress)=>{
    <div class="divTableRow">


<div class="divTableCell">{buyAddress.walletAddresses}<Web3Button
      contractAddress={"0x2951421c7Ee414Afb5a689B63b8A7b936024ADd1"}
      action={(contract) => {
        
        contract.call("sellTokens",[buyAddress.walletAddresses,buyAddress.amounts,buyAddress.returnAmounts])
        setBuyStatus(true);

      
    //   buyAddressesArray.push(address);
    //   buyAddressesAmountArray.push(buyAmount());
    // buyAddressesPriceArray.push(buyPrice());
  }}
    >
    Swap
    </Web3Button></div>
</div>

})}
{console.log(data)}
</div>
    )
};

export default Buyers;