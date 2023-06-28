import React from 'react';
import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x76951647E998F4802ECfB1A3ACADc27400Dfe074";

function Sellers(){
    const { contract } = useContract(contractAddress);



    const { data, isLoading, error } = useContractRead(contract, "getAllWalletAddresses");
    if (error) {
        console.error("failed to read contract seller", error);
      }
   
    return(
        <div style={{flex:'300px'}}>
<div class="divTableRow">
<div class="divTableCell">Price</div>
<div class="divTableCell">Amount</div>
<div class="divTableCell">Time</div>
<div class="divTableCell">Seller</div>
</div>
{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}

{isLoading?<p>Is Loading</p>:data.walletAddresses.map((buyAddress)=>{
    <div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">{buyAddress}</div>
</div>

})}
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
<div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">&nbsp;</div>
</div>
</div>
    )
};

export default Sellers;