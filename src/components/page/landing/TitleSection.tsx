import GraButton, { TraButton } from "@/components/common/Buttons";
import React, { CSSProperties } from "react";
import Image from "next/image";
import animation from "@/styles/animation.module.css";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
export interface MyCustomCSS extends CSSProperties {
  "--i": number;
}

// First Section
const TitleSection = () => {
  return (
    <section className="relative w-full zs-2">

      <div className="justify-center px-10 pt-40 pb-20 md:p-40 md:py-40 md:mx-10 md:items-center md:px-8">
        <Fade triggerOnce direction="down" duration={2000}>
          <div className="flex justify-center flex-nowrap ">
            <h2 className="lg:text-[70px] md:text-[50px] sm:text-[40px] font-bold text-white text-center lg:block hidden">
              Venom Pumpy
            </h2>
          </div>
        </Fade>
        <Fade triggerOnce direction="down" duration={4000}>
          <h2 className="lg:text-[70px] md:text-[50px] sm:text-[40px] font-bold text-white text-center lg:block hidden">
            <div className={`${animation.waviy} lg:block hidden`}>
              <span style={{ "--i": 1 } as MyCustomCSS}>V</span>
              <span style={{ "--i": 2 } as MyCustomCSS}>e</span>
              <span style={{ "--i": 3 } as MyCustomCSS}>n</span>
              <span style={{ "--i": 4 } as MyCustomCSS}>o</span>
              <span style={{ "--i": 5 } as MyCustomCSS}>m</span>
              <span style={{ "--i": 10 } as MyCustomCSS}>&nbsp;</span>
              <span style={{ "--i": 6 } as MyCustomCSS}>m</span>
              <span style={{ "--i": 7 } as MyCustomCSS}>e</span>
              <span style={{ "--i": 7 } as MyCustomCSS}>m</span>
              <span style={{ "--i": 8 } as MyCustomCSS}>e</span>
              <span style={{ "--i": 9 } as MyCustomCSS}>c</span>
              <span style={{ "--i": 11 } as MyCustomCSS}>o</span>
              <span style={{ "--i": 12 } as MyCustomCSS}>i</span>
              <span style={{ "--i": 13 } as MyCustomCSS}>n</span>
              <span style={{ "--i": 15 } as MyCustomCSS}>&nbsp;</span>
              <span style={{ "--i": 14 } as MyCustomCSS}>-</span>
              <span style={{ "--i": 15 } as MyCustomCSS}>&nbsp;</span>
              <span style={{ "--i": 16 } as MyCustomCSS}>N</span>
              <span style={{ "--i": 17 } as MyCustomCSS}>f</span>
              <span style={{ "--i": 18 } as MyCustomCSS}>t</span>
              <span style={{ "--i": 15 } as MyCustomCSS}>&nbsp;</span>
              <span style={{ "--i": 19 } as MyCustomCSS}>S</span>
              <span style={{ "--i": 20 } as MyCustomCSS}>t</span>
              <span style={{ "--i": 21 } as MyCustomCSS}>a</span>
              <span style={{ "--i": 22 } as MyCustomCSS}>k</span>
              <span style={{ "--i": 23 } as MyCustomCSS}>i</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>n</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>g</span>
              <span style={{ "--i": 15 } as MyCustomCSS}>&nbsp;</span>
              <span style={{ "--i": 19 } as MyCustomCSS}>E</span>
              <span style={{ "--i": 20 } as MyCustomCSS}>c</span>
              <span style={{ "--i": 21 } as MyCustomCSS}>o</span>
              <span style={{ "--i": 22 } as MyCustomCSS}>S</span>
              <span style={{ "--i": 23 } as MyCustomCSS}>y</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>s</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>t</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>e</span>
              <span style={{ "--i": 24 } as MyCustomCSS}>m</span>

            </div>
          </h2>
        </Fade>
        <div className="justify-center block">
          <TraButton className=" w-[156px] h-[56px] font-bold mt-10 min-[1020px]:hidden block m-auto ">
            Docs
          </TraButton>
          <GraButton className=" w-[156px] h-[56px] font-bold mt-10 min-[1020px]:hidden block m-auto ">
            Dapp
          </GraButton>
          <GraButton className="w-[156px] h-[56px] font-bold block m-auto mt-5">
            <Link href="">
              Stake
            </Link>
          </GraButton>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
