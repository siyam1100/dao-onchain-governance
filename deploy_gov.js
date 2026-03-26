const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // 1. Deploy Governance Token
  const Token = await hre.ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  // 2. Deploy Timelock (Min delay: 2 days)
  const Timelock = await hre.ethers.getContractFactory("TimelockController");
  const timelock = await Timelock.deploy(172800, [], [], deployer.address);
  await timelock.waitForDeployment();

  // 3. Deploy Governor
  const Governor = await hre.ethers.getContractFactory("MyGovernor");
  const governor = await Governor.deploy(await token.getAddress(), await timelock.getAddress());

  console.log("Governance Stack Deployed:");
  console.log(`- Token: ${await token.getAddress()}`);
  console.log(`- Timelock: ${await timelock.getAddress()}`);
  console.log(`- Governor: ${await governor.getAddress()}`);
}

main().catch(console.error);
