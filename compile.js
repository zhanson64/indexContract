const path = require('path');
const fs = require('fs');
const solc = require('solc');

//must direct to path and read as a UTF-8 source
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//The 1 indicates the number of contracts to compile
//Accessing the Inbox contract and exporting it
module.exports = solc.compile(source, 1).contracts[':Inbox']; //:Inbox specifies the Inbox contract we could have more so we have 
//to be specific