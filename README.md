# Simple Contract in Solidity 

# Purpose:
This is just a simple contract that only has some messages. It is to demonstrate how to:
- set up a solidity contract
- set up a simple node.js environment to test, compile, and deploy
- set up mocha testing
- set up local and online deployment

# Requirements:
You can check the package.json to see all the requirements for this project but below are the reasons for using them and what they are for:
- Mocha is used for general testing of contracts deployed locally
- Ganache-cli is for testing contracts locally and creating a set of unlocked accounts that you can use.
- Solc is the solidity compiler. It will compile solidity into bytecode and produce some application binary interface (ABI) code. ABI code is used to interface with deployed contract on blockchain. 
- Web3 is a library for interacting with deployed contract. It is not limited to just ethereum. 
- truffle-hdwallet-provider is a module that will connect to the Infura which is on the Rinkeby Network

# File structure of Project:
- contracts: contains the contracts written in solidity. 
- test: contains mocha tests that will be used locally. 
- deploy.js: deploy script for deploying to online Rinkeby Network
- compile.js: compile script for solc 
- Config: Configuration file for holding mnemonic and url from Infura.

# How to set up and Test locally:
1. Run `npm install --global --production windows-build-tool` as adminstrator to help to build web3 later. You only have to do this once.
2. Run `npm install` to download all the dependencies in package.json.
3. Run `npm run test` to run the mocha tests which will deploy a contract locally and run thru the test cases. 

# How to deploy to Rinkeby Network:
1. Download the metamask chrome extension. 
2. Create an account and save the 12-word Mnemonic to a file for later.
3. Get some ether from Rinkeby Authenticated Faucet. Check Solidity Overview for more information.
4. Go to Infura and sign up. They will send you an email with the different urls you can use. Copy the Url for later. Check the Solidity Overview for more information.
5. Go into the config file under Config and fill in your url and mnemonic. 
6. Run `npm run deploy` and your contract should deploy to the Rinkeby Network. Keep in mind that this will take around 30-40 seconds because it has to be mining and added to the blockchain. 
7. (Optional) The address that you get back can be put in etherscan where you can see the actual properties and where the contract is on the blockchain. Check the Solidity Overview page. 
8. (Optional) You can also use remix to view and interact with the deployed blockchain dynamically. Go to the site, paste in your contract, under run change the environment to injected web3, compile your contract, and then paste in the address of the deployed contract in the at Address section.  
