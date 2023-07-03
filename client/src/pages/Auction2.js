import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import React,{useState} from 'react';
import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,Popover,
    PopoverHandler,
    PopoverContent,
    Input
  } from "@material-tailwind/react";
  import sample from '../assets/car.mp4';
  import sample2 from '../assets/house1.mp4';

  import sample4 from '../assets/house3.mp4';
  const sdk = new ThirdwebSDK("fantom-testnet");
  const contractAddress = "0x0E94123201e7d30dA0E64f4f61A15079bBD16566";
  
  

function Auctions() {
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(contract, "getAllData");

    const [sdkChain,setSdkChain]= useState("fantom-testnet");
  
    const sdk = new ThirdwebSDK(sdkChain);
    const address = useAddress();

const currentPrice= "440 fantom";
const amount=null;

if(data){

  console.log(data.data1)
  
}
  return ( 
      <div style={{padding:'2em'}}>
       
       <Web3Button
          contractAddress={"0x0E94123201e7d30dA0E64f4f61A15079bBD16566"}
          action={(contract) => {contract.call("getAllData",[address,12,"sal","gho"]).then(()=>{
              
              // contract.call("SellTokens",[selectedSeller,selectedSellerQuantity])
              
              
            })
        }}
        >
        Send
        </Web3Button>
          {isLoading?<p>loading</p>:JSON.stringify(data)}
        {!address?<div><h2>Make Sure to connect wallet</h2><ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} /></div>:<ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />}
        <span>
            note contracts and backend not hooked up:contact developer:salmanghouse1@gmail.com
            </span>
         
<div style={{display:"flex"}}>

      
        {data}
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                <video className='videoTag' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
  </video>
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Lamborghini Aventador
                  </Typography>
                  <Typography>
                    Brand New.{currentPrice}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                <Popover>
      <PopoverHandler>
        <Button>Bid Now</Button>
      </PopoverHandler>
      <PopoverContent>
        curent Price: {currentPrice}
      <Input label="Your Bid" />  {  <Web3Button
          contractAddress={"0x5C066A4E673EfDc91c7c9880f068B95752119994"}
          action={(contract) => {contract.call("bid",[amount]).then(()=>{
              
              // contract.call("SellTokens",[selectedSeller,selectedSellerQuantity])
              
              
            })
            //   SellAddressesArray.push(address);
            //   SellAddressesAmountArray.push(SellAmount());
            // SellAddressesPriceArray.push(SellPrice());
        }}
        >
        Bid
        </Web3Button>}
      </PopoverContent>
    </Popover>
                </CardFooter>
              </Card>

        
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                <video className='videoTag' autoPlay loop muted>
      <source src={sample2} type='video/mp4' />
  </video>
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Great Speed Apartments
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life
                    in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Sold</Button>
                </CardFooter>
              </Card>
    

        
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                <video className='videoTag' autoPlay loop muted>
      <source src={sample4} type='video/mp4' />
  </video> </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Sim Manor
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life
                    in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Sold</Button>
                </CardFooter>
              </Card>
    

</div>       

            </div>
     );
}

export default Auctions;