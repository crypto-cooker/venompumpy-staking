import Link from "next/link";
import React, { useState } from "react";
import GraButton, { TraButton } from "../../common/Buttons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
interface Props { }

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  // const [hideOnScroll, setHideOnScroll] = useState(true);

  const [headerStyle, setHeaderStyle] = useState({
    transition: "all .6s ease",
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y == 0;

      // const isVisible =
      // if(prevPos)
      const shouldBeStyle = {
        // transitionDuration: "2s",
        // transitionProperty: "backdropFilter",

        transition: `all .6s ${isVisible ? "ease-in" : "ease-out"}`,
        // transition: `backdropFilter 2s`,
        // transform: isVisible ? 'none' : 'translate(0, -100%)',
        backdropFilter: isVisible ? "none" : "blur(20px)",
        width: "-webkit-fill-available",
        boxShadow: isVisible
          ? "none"
          : "0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)",
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );
  return (
    <nav
      className="fixed w-[-webkit-fill-available] h-[80px] z-50"
      style={headerStyle}
    >
      <div className="relative z-1000 justify-center md:p-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-[100%]">
        <div className="md:w-[-webkit-fill-available] md:absolute md:hidden md:p-5 h-[80px]">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden ">
              <button
                className="p-2 w-[50px] text-gray-700 outline-none focus:border-gray-400 focus:border rounded-full bg-[#41d65e6b] ml-4"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/TR/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/TR/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="z-100">
          <div
            className={`flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="max-[768px]:bg-[#333a3fa3] max-[768px]:w-[200px] max-[768px]:p-7 max-[768px] max-[768px]:rounded-lg max-[768px]:backdrop-blur-[3px] font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {/* <li className="hidden text-base text-white md:block md:absolute left-8">
                    <a href="#">
                      <h2 className="text-2xl font-bold text-white">
                        <span className="text-[#1BF57F]">Y</span>ieldz
                      </h2>
                    </a>
                  </li> */}
              <li className="text-base text-white cursor-pointer hover:underline">
                <Link href="https://twitter.com/venommemepumpy">Twitter</Link>
              </li>
              <li className="text-base text-white cursor-pointer hover:underline">
                <Link href="https://t.me/venomart_space">Telegram</Link>
              </li>
              <li className="text-base text-white cursor-pointer hover:underline">
                <Link href="https://discord.com/invite/Sjrm3CJMdb">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" className="absolute top-5 left-16">
        <h2 className="text-2xl font-bold text-white">
          <span className="text-[#1BF57F] ">V</span>enom <span className="text-[#1BF57F] ">P</span>umpy
        </h2>
      </a>
      {/* <TraButton className="w-[96px] h-[40px] mr-2 transition delay-150 duration-300 ease-in-out absolute top-5 right-40">
        <Link href="https://yieldz.gitbook.io/yieldz-protocol/">Docs</Link>
      </TraButton> */}

      <GraButton className="w-[96px] h-[40px]  absolute top-5 right-12">
        <Link href="/dashboard">Dapp</Link>
      </GraButton>
    </nav>
  );
};

export default Navbar;
