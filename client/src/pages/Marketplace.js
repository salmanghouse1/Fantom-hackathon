import React from 'react';
// import '.././App.css';
// import Lottie from 'react-lottie';
// import Particles from 'react-particles-js';
import ComplexNavbar from "../components/Header";
import "../App.css";
import ApexChartGraphComp from '../components/Graph';

function MarketPlace() {
    
      


    return ( 
        
        
        <div>
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
<div style={{flex:'300px'}}>b</div><div style={{flex:'300px'}}> c</div></div>
</div> 
        
     );
}

export default MarketPlace;