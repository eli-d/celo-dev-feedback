const Web3 = require('web3')
require('dotenv').config();
var web3 = new Web3()

const getAccount = async () => {
    try {
        const secret = process.env.SECRET;
        if (secret) {
            return await web3.eth.accounts.privateKeyToAccount(secret);
        } else {
            const newAccount = await web3.eth.accounts.create();
            console.log(`Add this secret your .env: ${newAccount.privateKey}`);
            throw new Error("Missing secret.");
        }
    } catch (e) {
        return console.log(e);
    }
}

module.exports = {
    getAccount
}
