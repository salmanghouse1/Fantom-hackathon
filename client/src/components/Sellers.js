import React from 'react';


const contractAddress = "enter contract address";

function Sellers(){
    const { contract } = useContract(contractAddress);



    const { data, isLoading, error } = useContractRead(contract, "getAllWalletAddressCount");
  
   
    return(
        <div style={{flex:'300px'}}>
<div class="divTableRow">
<div class="divTableCell">Price</div>
<div class="divTableCell">Amount</div>
<div class="divTableCell">Time</div>
<div class="divTableCell">Seller</div>
</div>
{/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}

{data.walletAddresses.map((sellAddress)=>{
    <div class="divTableRow">
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>
<div class="divTableCell">&nbsp;</div>

<div class="divTableCell">{sellAddress}</div>
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