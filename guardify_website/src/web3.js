import Web3 from 'web3';
import Guardify from './artifacts/contracts/Guardify.sol/Guardify.json'; // Adjust the path if necessary

let web3;

const getWeb3 = () => {
  if (!web3) {
    // Initialize Web3 instance, connect to the local blockchain
    web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  }
  return web3;
};

const loadContract = async (web3) => {
  const contractABI = Guardify.abi;
  
  // Use the contract address from your interact.mjs file
  const contractAddress = web3.utils.toChecksumAddress('0x5FbDB2315678afecb367f032d93F642f64180aa3');

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  return contract;
};

export { getWeb3, loadContract };
