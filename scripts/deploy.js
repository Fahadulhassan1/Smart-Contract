const hre = require("hardhat");

async function main() {
  

  const Sample = await hre.ethers.getContractFactory("sample");
  const sample = await Sample.deploy();

  await sample.deployed();

  console.log(
    `Sample deployed to ${sample.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
