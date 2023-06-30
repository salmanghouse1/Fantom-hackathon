import React,{useState} from 'react';

import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import '../App.css';

const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x8EF26aDdCe35A7Bc45288b5f05c4A9312EA94E3D";

function Sellers(){
    const { contract } = useContract(contractAddress);
    

    const [buyStatus,setBuyStatus]=useState(false);

    const { data, isLoading, error } = useContractRead(contract, "getAllWalletAddresses");
  
    if (error) {
        console.error("failed to read contract buyer", error);
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
{isLoading?<p>Is Loading No Sellers</p>:data.map((sellerAddress)=>{
    <div class="divTableRow">

<div class="divTableCell">{sellerAddress.walletAddresses}<Web3Button
      contractAddress={"0x006E132e20Fd8D38689323216863C7c20dc54761"}
      action={(contract) => {
        
        contract.call("buyTokens",[sellerAddress.walletAddresses,sellerAddress.amounts]);
        setBuyStatus(true);

      }}
    //   buyAddressesArray.push(address);
    //   buyAddressesAmountArray.push(buyAmount());
    // buyAddressesPriceArray.push(buyPrice());
    className="btn"
    >
    Swap
    </Web3Button></div>
    
</div>

})}


</div>
    )
};

export default Sellers;