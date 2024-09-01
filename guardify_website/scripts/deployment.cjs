const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const GuardifyFactory = await ethers.getContractFactory("Guardify");
    console.log("Deploying Guardify...");
    const guardify = await GuardifyFactory.deploy();
    await guardify.deployed();

    console.log("Guardify deployed to:", guardify.address); // For ethers v5.x
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
