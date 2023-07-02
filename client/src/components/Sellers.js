import React,{useState} from 'react';

import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import '../App.css';

const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x06B44B5FAC809723C58c74B0A2315BF70BaF6cE8";

function Sellers(props){
    const { contract } = useContract(contractAddress);
    const rows = [];
// for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
 
    rows.push(<>
    <tr>
   <th>
            {props.myAddress.slice(0, 3)}...{props.myAddress.slice(-3)}</th><th>Send:3</th><th>Recieve:5</th><th>Pair:FTMtoUSD<Web3Button
          contractAddress={"0x5C066A4E673EfDc91c7c9880f068B95752119994"}
          action={(contract) => {contract.call("",[props.myAddress,1,2,"FTM","USD"]).then(()=>{
            
            // contract.call("buyTokens",[selectedSeller,selectedSellerQuantity])
            setBuyStatus(true);
            
          })
          //   buyAddressesArray.push(address);
          //   buyAddressesAmountArray.push(buyAmount());
          // buyAddressesPriceArray.push(buyPrice());
        }}
        >
        Swap
        </Web3Button>
        </th>
        </tr>
    </>)

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
<table class="tg">
  <thead>
<tr>

<th>
Seller
</th>
<th>
Seller Send
</th>
<th>
Seller Recieve
</th>
<th>
Pair
</th>

</tr>
  </thead>

{/* {data.map((singleData)=>{<div style={{display:"inline"}}><h5>Address:{singleData.addr}Amount Asking:{singleData.amounts}Return Amount:{singleData.returnAmounts}TokenPairs:{singleData.tokenPairs}</h5></div>})} */}

<tbody>{rows}</tbody>

        </table>
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