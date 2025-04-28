# Uniswap V3 Periphery

[![Tests](https://github.com/Uniswap/uniswap-v3-periphery/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-v3-periphery/actions?query=workflow%3ATests)
[![Lint](https://github.com/Uniswap/uniswap-v3-periphery/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-v3-periphery/actions?query=workflow%3ALint)

This repository contains the periphery smart contracts for the Uniswap V3 Protocol.
For the lower level core contracts, see the [uniswap-v3-core](https://github.com/Uniswap/uniswap-v3-core)
repository.

## Bug bounty

This repository is subject to the Uniswap V3 bug bounty program,
per the terms defined [here](./bug-bounty.md).

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@uniswap/v3-periphery`
and import bytecode imported from artifacts located at
`@uniswap/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Uniswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Uniswap v3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@uniswap/v3-periphery`, e.g.:

```solidity
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```
# run deployments
`npx hardhat run scripts/deploy.js --network unichain`
`npx hardhat verify --network unichain 0xd31E9aF251aBE7e990e0a1342F5C0c24ee62C653 0x1f98400000000000000000000000000000000003 0x4200000000000000000000000000000000000006`


## Deployments SwapRouter BASE
0x971247f4080F4b9E5319c03EfB081E3B21fc004C
## Deployments SwapRouter Arbitrum
0xE592427A0AEce92De3Edee1F18E0157C05861564
## Deployments SwapRouter Unichain
0xd31E9aF251aBE7e990e0a1342F5C0c24ee62C653




