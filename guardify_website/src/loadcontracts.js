import Web3 from 'web3';
import Guardify from '../src/guardify_blockchain/artifacts/contracts/Guardify.sol/Guardify.json'; // Adjust the path according to your structure

const loadContract = async (web3, networkId) => {
  const deployedNetwork = Guardify.networks[networkId];
  if (deployedNetwork) {
    const contract = new web3.eth.Contract(
      Guardify.abi,
      deployedNetwork.address,
    );
    return contract;
  } else {
    console.error('Smart contract not deployed to the detected network.');
  }
};

export default loadContract;
