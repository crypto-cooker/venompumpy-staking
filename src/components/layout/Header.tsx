import React, { useEffect, useState } from "react";
import { initVenomConnect } from '../../venom-connect/configure';
import { VenomConnect } from 'venom-connect';
import Link from "next/link";
import { GraButton } from "../common/Buttons";
interface props {
  color: number;
}
const Header = () => {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  const connectWallet = async () => {
    console.log("ASDF")
    if(!venomConnect) return;
    await venomConnect.connect();
  }
  return (
    <>
      <header className="relative z-50 flex-none w-full text-sm font-semibold leading-6 text-slate-900">
        <nav className="px-4 mx-auto max-w-container sm:px-6 lg:px-8">
          <div className="relative flex items-center pt-[2.125rem]">
            <Link href="/" className="mr-auto">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-[#1BF57F] ">V</span>enom <span className="text-[#1BF57F] ">P</span>umpy
              </h2>
            </Link>
            <GraButton
                className="w-[184px] h-[40px] font-semibold text-[16px]"
                onClick={connectWallet}
              >
                Connect Wallet
            </GraButton>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
