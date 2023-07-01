import React,{useState} from 'react';

import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import '../App.css';

const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x06B44B5FAC809723C58c74B0A2315BF70BaF6cE8";

function Sellers(){
    const { contract } = useContract(contractAddress);
    

    const [buyStatus,setBuyStatus]=useState(false);

    const { data, isLoading, error } = useContractRead(contract, "getAllWalletAddresses");
  
    if (error) {
        console.error("failed to read contract buyer", error);
      }
      else{
        console.log("Sellers:"+data)
      }
    return(
        <div style={{flex:'300px'}}>
<div class="divTableRow">

<div class="divTableCell">Seller</div>
<div class="divTableCell">Amount Asking</div>
<div class="divTableCell">Amount Sending</div>
<div class="divTableCell">Pair</div>
</div>
{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}

{/* 
{isLoading?<p>Is Loading No Sellers</p>:data.map((sellerAddress)=>{
    <div class="divTableRow">

<div class="divTableCell">{sellerAddress.walletAddresses}<Web3Button
      contractAddress={"0x06B44B5FAC809723C58c74B0A2315BF70BaF6cE8"}
      action={(contract) => {
        
        contract.call("buyTokens",[sellerAddress.walletAddresses,sellerAddress.amounts,sellerAddress.returnAmounts]);
        setBuyStatus(true);

      }}
    //   buyAddressesArray.push(address);
    //   buyAddressesAmountArray.push(buyAmount());
    // buyAddressesPriceArray.push(buyPrice());
    className="btn"
    >
    Swap
    </Web3Button></div>
     */}
</div>

// })}


    )
};

export default Sellers;