require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require('hardhat-deploy');

const PRIVATE_KEY=process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  settings:{
    optimizer:{
      enabled:true,
      runs:200
    }
  },networks:{
    mainnet:{
      url:`https://rpcapi.fantom.network`,
      chainId:250,
      accounts:[`0x${PRIVATE_KEY}`]
    },
    testnet:{
      url:`https://rpc.testnet.fantom.network`,
      chainId:4002,
      accounts:[`0x${PRIVATE_KEY}`]
    },
    coverage:{
      url:`http://localhost:8555`
    },
    localhost:{
      url:`http://127.0.0.1:8545`
    }
  }
};
