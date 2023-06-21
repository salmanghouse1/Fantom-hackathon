const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { ethers } = require("hardhat");



describe("HelloWorld", function () {
  it("Should Display Hello World as String:", async function () {
//   const Greeter=await ethers.getContractFactory("HelloWorld");
// const greeter=await Greeter.deploy("HelloWorld");
// await greeter.deployed();
  
const greeter = await ethers.deployContract("HelloWorld");
expect(await greeter.getMessage()).to.equal("Hello, World!");
});




    // const lockedAmount = 1_000_000_000;
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    // const lock = await ethers.deployContract("HelloWorld", {
      // value: lockedAmount,
    });

    // assert that the value is correct
    // expect(await lock.unlockTime()).to.equal(unlockTime);
 