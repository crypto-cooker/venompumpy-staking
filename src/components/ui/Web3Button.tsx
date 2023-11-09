import React from "react";
import { useWeb3Context } from "../../context/Web3Context";
import GraButton from "../common/Buttons";

interface ConnectProps {
  connect: (() => Promise<void>) | null;
  color: number;
}
const ConnectButton = ({ connect, color }: ConnectProps) => {
  return connect ? (
    <GraButton
      className="w-[164px] h-[40px] font-bold"
      color={color}

    >
      Connect
    </GraButton>
  ) : (
    <GraButton
      className="w-[164px] h-[40px] font-bold"
      color={color}
    >
      Loading...
    </GraButton>
  );
};

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null;
  color: number;
}

const DisconnectButton = ({ color, disconnect }: DisconnectProps) => {
  return disconnect ? (
    <GraButton
      className="w-[164px] h-[40px] font-bold"
      color={color}
      onClick={disconnect}
    >
      Disconnect
    </GraButton>
  ) : (
    <GraButton className="w-[164px] h-[40px] font-bold" color={color}>
      Loading...
    </GraButton>
  );
};

export function Web3Button({ color }) {
  const { web3Provider, connect, disconnect } = useWeb3Context();

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} color={color} />
  ) : (
    <ConnectButton connect={connect} color={color} />
  );
}
