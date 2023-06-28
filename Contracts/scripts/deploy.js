// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

const contract1 = await hre.ethers.deployContract("WalletAddressStorageContractBuyer",["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]); 
  // const lockedAmount = hre.ethers.parseEther("0.001");


  const contract2 = await hre.ethers.deployContract("WalletAddressStorageContractSeller",["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);
  
  // const contract3 = await hre.ethers.deployContract("HelloWorld");

  const contract3 = await hre.ethers.deployContract("ERC20Basic");
  


  const contract4 = await hre.ethers.deployContract("DEX");
  
  const contract5 = await hre.ethers.deployContract("FTMtoUSDT");

  await contract1.waitForDeployment();
  console.log(`contract1 deployed to:${contract1.target}`);
  
  
  await contract2.waitForDeployment();
  console.log(`contract2 deployed to:${contract2.target}`);
  
  await contract3.waitForDeployment();
  console.log(`contract3 deployed to:${contract3.target}`);
  
  await contract4.waitForDeployment();
  console.log(`contract4 deployed to:${contract4.target}`);
  
  // contract 5 needs to be deployed to testnet see readme
  await contract5.waitForDeployment();
  console.log(`contract4 deployed to:${contract5.target}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});