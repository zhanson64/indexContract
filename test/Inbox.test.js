const assert = require('assert');
const ganache = require('ganache-cli'); //Will automatically create an account for us to use locally 
const Web3 = require('web3'); //Constructor function used to make instance of web3

const provider = ganache.provider();
const web3 = new Web3(provider); //creates instance of web3 with ganache provider 

const { interface, bytecode } = require('../compile');

//specify these outside so that they
//are global
let accounts; //list of accounts
let inbox; //the contract we initialized 
INTIAL_STRING = 'Hello World';
END_STRING = 'bye';

beforeEach(async () => {
    //Get a list of all unlocked accounts from ganache
    //NOTE: Almost all web3 functions are async. They will return a promise
    //Therefore you must include .then or .catch methods to handle if 
    //they fail or not or use async/await
    accounts = await web3.eth.getAccounts();
   
    //Going to grab one of these accounts
    //to deploy to network
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello World'] }) //bytecode to deploy as well as the initial message we have to send
    .send({ from: accounts[0], gas: '1000000' }); //First account in accounts array

    inbox.setProvider(provider);

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);// just asserts that the address of the contract exists
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call(); //requires no fuel or gas
        assert.equal(message, INTIAL_STRING);
    });

    it('message can be changed', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, END_STRING);
    });
});
