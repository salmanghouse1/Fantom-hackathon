
// import React,{Component, useState,componentDidMount} from 'react';
// import {
//   Button,
//   IconButton,
//   Card,
//   Input,Select
// } from "@material-tailwind/react";
// // import '.././App.css';
// // import Lottie from 'react-lottie';
// // import Particles from 'react-particles-js';
// import ComplexNavbar from "../components/Header";
// import "../App.css";
// import { Web3Button,ThirdwebProvider,ChainId,useAddress, ConnectWallet,useConnect, metamaskWallet ,useContractRead, useContract} from "@thirdweb-dev/react";

// import { ThemeProvider } from "@material-tailwind/react";
// import { Polygon } from "@thirdweb-dev/chains";
// import dayjs from 'dayjs' 
// import helloWorldabi from '../abi/helloWorld.json';
// import ApexChartGraphComp from '../components/Graph';
// import ChooseToken from './chooseToken';
// import Sellers from '../components/Sellers';
// import Buyers from '../components/Buyers';




// // comment out line 29
// // const contractAddress = "0xa52DcE2FF76Dd159b1B98F40c1239eD332a91f55";

// function MarketPlace(){
//   const [ isDarkMode, setIsDarkMode ] = useState(true);

// const [chosenPair,setChosenPair]=useState("FTMUSD")

// const [buyStatus,setBuyStatus]=useState(false);

// const [sellStatus,setSellStatus]=useState(false);

// const address = useAddress();

// const [value1,setValue1]=useState('');

// const [value2,setValue2]=useState('');

// const [value3,setValue3]=useState('');

// const [value4,setValue4]=useState('');
// // const desiredChainId=ChainId.Fantom;

//   // ThirdwebSDK sdk = new ThirdwebSDK("ethereum");


//   // comment out 56,57

//   // const { contract } = useContract(contractAddress);
//   // const { data, isLoading, error } = useContractRead(contract, "getMessage");

// // const { data: contract } = useContract("{{contract_address}}");
// // const { data, isLoading, error } = useContractRead(contract, "functionName");

// // var nextScreen = await sdk.wallet.IsConnected();

// if (error) {
//   console.error("failed to read contract", error);
// }
// const activeChain="fantom-testnet";
// const [buyAmount,setBuyAmount]=useState(null);
// const [sellAmount,setSellAmount]=useState(null);
// const [buyPrice,setBuyPrice]=useState(null);
// const [sellPrice,setSellPrice]=useState(null);
// let buyAddressesArray=[];
// let buyAddressesAmountArray=[];
// let buyAddressesPriceArray=[];
// let Price = null;


// const handleChangeBuyAmount = (event) => {
//   setBuyAmount(event.target.value);
// };


// const handleChangeSellAmount = (event) => {
//   setSellAmount(event.target.value);
// };


// const handleChangeSellPrice = (event) => {
//   setSellPrice(event.target.value);
// };


// const handleChangeBuyPrice = (event) => {
//   setBuyPrice(event.target.value);
// };

// const changePair=(event)=>{
//   setChosenPair(event.target.value)
// }


//     return ( 
        
        
//         <>
//         <div>{isLoading ? <p>Loading...</p> : <p>Contract Name: {data}</p>}</div>
// {!address?<div><h2>Make Sure to connect waller</h2></div>:<ChooseToken/>}

//   {!isLoading?<h1>{data}</h1>:<h1>Loading....{data}</h1>}
// {console.log(data)}
// {/* try(data){
// console.log(data.message)
// }catch(error){
// console.log(error)
// } */}
// <div>
// <div style={{display:'flex'}}>
// <div style={{flex:'300px'}}>
// <div class="divTableRow">
// <div class="divTableCell">Token Name</div>
// <div class="divTableCell">Price</div>
// <div class="divTableCell">24h Change</div>
// </div>
// {/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>

// </div>

// <div style={{flex:'300px'}}>

// {/* <ApexChartGraphComp></ApexChartGraphComp> */}

// <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />

// {
//   !address?<div>No wallet connected</div>:<div>My wallet address is {address}</div>}
// </div>



// <div style={{flex:'300px'}}>
//   <Buyers></Buyers>
// <div class="divTableRow">
// <div class="divTableCell">Price</div>
// <div class="divTableCell">Amount</div>
// <div class="divTableCell">Total</div>
// </div>
// {/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// </div>
// </div>

// </div>
// <div style={{display:'flex'}}>
// <div className="w-72">
//       <Select label="Select Pair" onChange={changePair}>
//         <Option selected>FTMtoUSD</Option>
//         <Option>FTMtoEth</Option>
//       </Select>
//     </div>
// {chosenPair==="FTMUSD"?<iframe style="aspect-ratio: 1200 / 630; width:100%; height:fit-content;" src="https://www.coindesk.com/embedded-chart/mLGwcntwq8DGD" width="100%" frameborder="0"></iframe>
// :<iframe style="aspect-ratio: 1200 / 630; width:100%; height:fit-content;" src="https://www.coindesk.com/embedded-chart/LFCBMGkF9cNdn" width="100%" frameborder="0"></iframe>}<div style={{flex:'300px'}}>
//   <Sellers></Sellers>
// <div class="divTableRow">
// <div class="divTableCell">Price</div>
// <div class="divTableCell">Amount</div>
// <div class="divTableCell">Time</div>
// <div class="divTableCell">Seller</div>
// </div>
// {/* The Rows bellow needs to be mapped, the smart contract or thirdweb sdk needs to getWallets */}
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>
// <div class="divTableRow">
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>
// <div class="divTableCell">&nbsp;</div>

// <div class="divTableCell">&nbsp;</div>
// </div>

// </div>
// <div style={{flex:'300px',display:"flex",flexDirection:"row"}}>
// <div id="buy" style={{display:"flex",flexDirection:"column"}}>
// <h3>Your Token Name:{}</h3>

// <h3>Buy</h3>
// {buyPrice}
// <label>Price</label>
// <Input type="number" value={buyPrice} onChange={handleChangeBuyPrice}></Input>
// {buyAmount}
// <label>Amount</label>
// <Input type="number" value={buyAmount} onChange={handleChangeBuyAmount}></Input>
// {!buyStatus?
// <Web3Button
//       contractAddress={"a"}
//       action={(contract) => {contract.call("addWalletAddress",[{address}]).then(()=>{
//         setBuyStatus(true);

//       })
//     //   buyAddressesArray.push(address);
//     //   buyAddressesAmountArray.push(buyAmount());
//     // buyAddressesPriceArray.push(buyPrice());
//   }}
//     >
//     Buy
//     </Web3Button>
//     :<Web3Button
//       contractAddress={"a"}
//       action={(contract) => {
//         contract.call("removeWalletAddress",[{address}]).then(()=>{
//           setBuyStatus(false)
//         })
         

//       }
//     //   buyAddressesArray.push(address);
//     //   buyAddressesAmountArray.push(buyAmount());
//     // buyAddressesPriceArray.push(buyPrice());
//   }
//     >
//     Cancel
//     </Web3Button>
//     }
//     {data}
// </div>
// <div id="sell" style={{display:"flex",flexDirection:"column"}}>
// <h3>Sell</h3>
// <label>Price{sellPrice}</label>

// <Input type="number" value={sellPrice} onChange={handleChangeSellPrice}></Input>
// <label>Amount{sellAmount}</label>
// <Input type="number" value={sellAmount} onChange={handleChangeSellAmount}></Input>
// {!sellStatus?
//   <Web3Button
//       contractAddress="contractAddressSeller"
//       action={async (contract) => {contract.call("addWalletAddress",[address,sellAmount,sellPrice])
//     setSellStatus(true)
//     }}
//       >
//       Sell
//     </Web3Button>
//     :
//     <Web3Button
//       contractAddress="contractAddressSeller"
//       action={(contract) => {contract.call("removeWalletAddress",[{address}]).then(()=>{
//         setSellStatus(false)
    
//       })
//       //   buyAddressesArray.push(address);
//     //   buyAddressesAmountArray.push(buyAmount());
//     // buyAddressesPriceArray.push(buyPrice());
//     }}
//     >
//     Cancel
//     </Web3Button>
// }
// </div>

// </div><div style={{flex:'300px'}}> 
// <p>Last Price</p>

// </div></div>
// </div> 
   


//         </>
            
//         );
//       }
    
//       export default MarketPlace;