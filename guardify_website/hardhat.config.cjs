require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

const INFURA_PROJECT_ID = '2c264774ac544f82a835e30324283345';
const PRIVATE_KEY = 'a7e1d7d4581e3adf159eb64a21cbab37774b5cc91add57224f45be254a55c57f';

module.exports = {
    solidity: "0.8.24",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        hardhat: {},
        sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: "RUG7QAMUUN3P11R5A1E7N53T19UNVWB3DP"
    },
};
