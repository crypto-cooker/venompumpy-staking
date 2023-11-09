import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TraButton } from "../common/Buttons";
interface props {
  color: number;
}
const Header = ({ color }: props) => {
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
