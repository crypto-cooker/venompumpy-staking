import {
  BYIELDZ_ABI,
  BYIELDZ_ADDRESS,
  STAKE_ABI,
  STAKE_ADDRESS,
  YIELDZ_ABI,
  YIELDZ_ADDRESS,
} from "@/config";
import { ethers } from "ethers";

export type Web3ProviderState = {
  provider: any;
  web3Provider: ethers.providers.Web3Provider | null | undefined;
  address: string | null | undefined;
  network: ethers.providers.Network | null | undefined;
  yzContract: ethers.Contract | null | undefined;
  byzContract: ethers.Contract | null | undefined;
  sContract: ethers.Contract | null | undefined;
  connect: (() => Promise<void>) | null;
  disconnect: (() => Promise<void>) | null;
};

const initProvider = new ethers.providers.JsonRpcProvider(
  "https://rpc.coredao.org/"
);
const yzContract = new ethers.Contract(
  YIELDZ_ADDRESS,
  YIELDZ_ABI,
  initProvider
);
const byzContract = new ethers.Contract(
  BYIELDZ_ADDRESS,
  BYIELDZ_ABI,
  initProvider
);
const sContract = new ethers.Contract(STAKE_ADDRESS, STAKE_ABI, initProvider);

export const web3InitialState: Web3ProviderState = {
  provider: initProvider,
  web3Provider: null,
  address: null,
  network: null,
  yzContract: yzContract,
  byzContract: byzContract,
  sContract: sContract,
  connect: null,
  disconnect: null,
};

export type Web3Action =
  | {
      type: "INIT_WEB3_PROVIDER";
      provider?: Web3ProviderState["provider"];
      yzContract?: Web3ProviderState["yzContract"];
      byzContract?: Web3ProviderState["byzContract"];
      sContract?: Web3ProviderState["sContract"];
    }
  | {
      type: "SET_WEB3_PROVIDER";
      provider?: Web3ProviderState["provider"];
      web3Provider?: Web3ProviderState["web3Provider"];
      address?: Web3ProviderState["address"];
      network?: Web3ProviderState["network"];
      yzContract?: Web3ProviderState["yzContract"];
      byzContract?: Web3ProviderState["byzContract"];
      sContract?: Web3ProviderState["sContract"];
    }
  | {
      type: "SET_ADDRESS";
      address?: Web3ProviderState["address"];
    }
  | {
      type: "SET_NETWORK";
      network?: Web3ProviderState["network"];
    }
  | {
      type: "RESET_WEB3_PROVIDER";
    };

export function web3Reducer(
  state: Web3ProviderState,
  action: Web3Action
): Web3ProviderState {
  switch (action.type) {
    case "INIT_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        yzContract: action.yzContract,
        byzContract: action.byzContract,
        sContract: action.sContract,
      };
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        network: action.network,
        yzContract: action.yzContract,
        byzContract: action.byzContract,
        sContract: action.sContract,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_NETWORK":
      return {
        ...state,
        network: action.network,
      };
    case "RESET_WEB3_PROVIDER":
      return web3InitialState;
    default:
      throw new Error();
  }
}
