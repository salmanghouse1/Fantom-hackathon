import React from 'react';


function Chart(){
 return( 
 <>
{{   if(chosenPair==="FTMUSD"){
        <iframe style="aspect-ratio: 1200 / 630; width:100%; height:fit-content;" src="https://www.coindesk.com/embedded-chart/mLGwcntwq8DGD" width="100%" frameborder="0"></iframe>
        
    }
    else if(chosenPair==="FTMETH"){
        <iframe style="aspect-ratio: 1200 / 630; width:100%; height:fit-content;" src="https://www.coindesk.com/embedded-chart/LFCBMGkF9cNdn" width="100%" frameborder="0"></iframe>
    }
}}
</>

)
 }