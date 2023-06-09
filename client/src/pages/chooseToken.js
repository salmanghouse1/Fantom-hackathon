import React,{useState} from 'react';


function ChooseToken(){
    
const [selectedTokenStatus,isSelectedToken]=useState(false);
const [selectedToken,selectedTokenChoice]=useState("");

        return(
            <div>

            {
                selectedTokenStatus?<div>

                <h1>Exchange Choose Token you want</h1>
                <p onClick={()=>{isSelectedToken(true);
                    selectedTokenChoice("Fantom");
                }}>ethereum</p>
                <p onClick={()=>{isSelectedToken(true);
                    selectedTokenChoice("XDC");
                }}>XDC</p>
                </div>:
                <div>
                
                    <h1>Exchange Choose the token you have</h1>
                    <p onClick={()=>{isSelectedToken(true);
                        selectedToken("Fantom");
                    }}>Fantom</p>
                    </div>
                
}
           </div>
            
            )
}
 
export default ChooseToken;