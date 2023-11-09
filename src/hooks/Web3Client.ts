import { useEffect, useReducer, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  Web3ProviderState,
  Web3Action,
  web3InitialState,
  web3Reducer,
} from "../reducers";
import { toast } from "react-toastify";
import { CHAIN_ID } from "@/config";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
};

let web3Modal: Web3Modal | null;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

export const useWeb3 = () => {
  const [state, dispatch] = useReducer(web3Reducer, web3InitialState);
  let {
    provider,
    web3Provider,
    address,
    network,
    yzContract,
    byzContract,
    sContract,
  } = state;

  const connect = useCallback(async () => {
    if (web3Modal) {
      try {
        const provider = await web3Modal.connect();
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const address = await (await signer).getAddress();
        const network = await web3Provider.getNetwork();

        if (network.chainId != CHAIN_ID) {
          toast.error("Network Error! You can add Core Network to Metamask via https://scan.coredao.org");
          return;
        }
        toast.success("Connected to Wallet");

        // Twinstar Added 2023.3.21 *************/
        // Contract Definition Read-Write Signer Contract provider
        yzContract = yzContract.connect(await signer);
        byzContract = byzContract.connect(await signer);
        sContract = sContract.connect(await signer);
       
        // End Added
        dispatch({
          type: "SET_WEB3_PROVIDER",
          provider,
          web3Provider,
          address,
          network,
          yzContract,
          byzContract,
          sContract,
        } as Web3Action);
      } catch (e) {
        console.log("connect error", e);
      }
    } else {
      console.error("No Web3Modal");
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      toast.error("Disconnected from Web3");
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      } as Web3Action);
    } else {
      console.error("No Web3Modal");
    }
  }, [provider]);

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  // EIP-1193 events
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        toast.info("Changed Web3 Account");
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        } as Web3Action);
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        if (typeof window !== "undefined") {
          console.log("switched to chain...", _hexChainId);
          toast.info("Web3 Network Changed");
          window.location.reload();
        } else {
          console.log("window is undefined");
        }
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);
  //
  // useEffect(()=>{
  //   if(byzContract?.on){
  //     byzContract.on("Stake", handleAccountsChanged);
  //   }
  // },[byzContract])
  return {
    provider,
    web3Provider,
    address,
    network,
    yzContract,
    byzContract,
    sContract,
    connect,
    disconnect,
  } as Web3ProviderState;
};
