const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { ethers } = require("hardhat");







describe("WalletAddressStorageContractBuyer", function () {
  it("Should Display Wallet Address as String:", async function () {
//   const Greeter=await ethers.getContractFactory("HelloWorld");
// const greeter=await Greeter.deploy("HelloWorld");
// await greeter.deployed();

console.log(owner.address);

const contractHolder = await ethers.deployContract("WalletAddressStorageContractBuyer").then(()=>{

  console.log(contractHolder.address);

});

const owner = await ethers.getSigners();

expect(await contract.addWalletAddress(owner.address)).to.equal(owner.address);

// await expect(addWalletAddressFunc.addWalletAddress()).to.emit(addWalletAddressFunc, "Event");


});

describe("WalletAddressStorageContractBuyer", function () {
  it("Should Display Wallet Address as String:", async function () {

    await expect(addWalletAddressFunc.addwalletAddress())
    .to.emit(addWalletAddressFunc, "address indexed")
    .withArgs(owner.address);
  });


  })})


    // const lockedAmount = 1_000_000_000;
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    // const lock = await ethers.deployContract("HelloWorld", {
      // value: lockedAmount,
 

    // assert that the value is correct
    // expect(await lock.unlockTime()).to.equal(unlockTime);
 