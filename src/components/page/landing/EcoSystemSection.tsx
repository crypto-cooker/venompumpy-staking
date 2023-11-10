import GraButton from "@/components/common/Buttons";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import router from "next/router";
interface Props { }
//Third Section - Get Started
const EcoSystemSection = (props: Props) => {
  return (
    <section className="third-panel relative w-full z-2 p-3">
      
      <Fade triggerOnce direction="right" duration={2000}>
        <div className="justify-center md:p-6 py-6 mx-10 md:items-center md:px-8">
          <h2 className="lg:text-[40px]  md:text-[30px] sm:text-[20px] text-[20px] text-white font-bold text-center">
            WELCOME TO THE <br></br>VENOMPUMPY UNIVERSE
          </h2>
          <h2 className="md:text-[24px] text-[16px] text-[#898CA9] font-bold text-center">
            A memecoin built with classic NFT on Venom Network to reward holders with up to 5% daily rewards staking.
            Step into a realm where innovation meets opportunity. VenomPumpy isn’t just another token; it’s a movement, a revolution, a promise of a brighter crypto future.
          </h2>

        </div>
      </Fade>
    </section>
  );
};

export default EcoSystemSection;
