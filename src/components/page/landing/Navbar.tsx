import Link from "next/link";
import React, { useState } from "react";
import GraButton, { TraButton } from "../../common/Buttons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

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
      <a href="#" className="absolute top-3 left-10">
        <img src="./images/vpumpylogo.jpg" className="w-[60px] rounded-full"/>
      </a>
      <GraButton className="w-[96px] h-[40px]  absolute top-5 right-12">
        <Link href="/dashboard">Dapp</Link>
      </GraButton>
    </nav>
  );
};

export default Navbar;
