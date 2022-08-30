const path = require('path');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-truffle5");
require('dotenv').config({path: path.join(__dirname, './.env')});
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url : (process.env.INFURA_KOVAN_URL + process.env.INFURA_API_KEY),
      }
    }
  },
  solidity: "0.8.9",
};
