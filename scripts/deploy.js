async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Unichain Network
  const factoryAddress = "0x1f98400000000000000000000000000000000003";  // factoryAddress
  const WETH9Address = "0x4200000000000000000000000000000000000006";    // WETH

  const SwapRouter = await ethers.getContractFactory("SwapRouter");
  const swapRouter = await SwapRouter.deploy(factoryAddress, WETH9Address);
  console.log("SwapRouter deployed to:", swapRouter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
