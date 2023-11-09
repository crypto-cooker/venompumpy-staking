// Global Functions

import Web3 from "web3";
export async function getCurrentBlockTime() {
  const web3Instance = new Web3(window.ethereum);
  const block = await web3Instance.eth.getBlock("latest");
  const blockTimestamp = block.timestamp;
  const currentBlockTime = Number(blockTimestamp);
  return currentBlockTime;
}
