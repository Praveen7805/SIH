import Web3 from 'web3';
import contractData from './src/artifacts/contracts/Guardify.sol/Guardify.json' assert { type: 'json' };

const web3 = new Web3('http://localhost:8545');
const contractABI = contractData.abi;
const contractAddress = web3.utils.toChecksumAddress('0x5FbDB2315678afecb367f032d93F642f64180aa3');

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function main() {
    const accounts = await web3.eth.getAccounts();
    const fromAddress = accounts[0];

    // Add a record
    await contract.methods.recordAttack("Sample Attack").send({ from: fromAddress, gas: 3000000 });

    // Retrieve records
    const result = await contract.methods.getAttackRecords().call();
    console.log(result);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
