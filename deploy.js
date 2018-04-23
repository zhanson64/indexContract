const HDWalletProvider = require('truffle-hdwallet-provider'); // a provider that will connect to infura and set up unlock account 
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
'cargo vintage inform dune december allow fever river zone style report obey', //12 word Mnemonic. Can be create with meta mask
'https://rinkeby.infura.io/6oRjTaSv1lRcxJ8Ncqq4' //This is the url with the token provided by Infura
);

const web3 = new Web3(provider); //connecting provider into web3 to use to interface with deployed contract

//setup it up in async because await requires to be in a async function 
//in order to be used
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Here is the intial message'] })
    .send({ gas: '1000000', from: accounts[0] }); //must include this because nothing is free on ethereum. Sender will get charged ether

    console.log('Contract deployed to', result.options.address);
};
deploy();