import React, { useState } from 'react';
import { useContractEvents, Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


const sdk = new ThirdwebSDK("fantom-testnet");
const contractAddress = "0x5C066A4E673EfDc91c7c9880f068B95752119994";

const walletAddressesArray=[];
const amountsArray=[];
const returnAmountsArray=[];
function Buyers(props){
    const { contract } = useContract(contractAddress);
   

    const [buyStatus,setBuyStatus]=useState(false);
    // const { data, isLoading, error } = useContractRead(contract,"getPeople");

    // const { data2, isLoading2, error2 } = useContractRead(contract,"getAmounts");

    // const { data3, isLoading3, error3 } = useContractRead(contract,"getReturnAmounts");

    // const { data4, isLoading4, error4} = useContractRead(contract,"getTokenPair");


    // if (error) {
    //     console.error("failed to read contract buyer", error);
    //   }
    //   else{
    //     console.log("everything ok");
    //     console.log("Buyers list"+data);
    //     // console.log(data.walletAddresses);
    //   }
      // for(i=0;i<data.walletAddresses.length;i++){
      //   walletAddressesArray.push(data.walletAddresses[i]);
      //  }
      //  for(i=0;i<data.amounts.length;i++){
      //   amountsArray.push(data.amounts[i]);
       
      //  }
       
      //  for(i=0;i<data.returnAmounts.length;i++){
      //   amountsArray.push(data.amounts[i]);
       
      //  }

// const retrievedData=[{"address":data,"amount":data2,"returnedAmount":data3,"tokenPair":data4}];
// JSON.stringify(retrievedData);
const rows = [];
// for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
 
    rows.push(<>
    <tr>
   <th>
            {props.myAddress.slice(0, 3)}...{props.myAddress.slice(-3)}</th><th>Send:1</th><th>Recieve:2</th><th>Pair:FTMtoUSD<Web3Button
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
    
    
    // }
    
      return(
        <>
<table class="tg">
  <thead>
<tr>

<th>
Buyer
</th>
<th>
Buyer Send
</th>
<th>
Buyer Recieve
</th>
<th>
Pair
</th>

</tr>
  </thead>

{/* {data.map((singleData)=>{<div style={{display:"inline"}}><h5>Address:{singleData.addr}Amount Asking:{singleData.amounts}Return Amount:{singleData.returnAmounts}TokenPairs:{singleData.tokenPairs}</h5></div>})} */}

<tbody>{rows}</tbody>

        </table>
          </>
        

  


    )
};

export default Buyers;