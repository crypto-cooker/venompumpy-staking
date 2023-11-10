import React from "react";
import { Fade } from "react-awesome-reveal";
import GraButton from "@/components/common/Buttons";

interface Props { }
//Third Section - Get Started
const PresaleSection = (props: Props) => {
  return (
    <section className="third-panel relative w-full z-2 p-8">
      
      <Fade triggerOnce direction="right" duration={2000}>
        <div className="justify-center md:p-6 py-6 mx-10 md:items-center md:px-8">
          <h2 className="lg:text-[40px]  md:text-[30px] sm:text-[20px] text-[20px] text-white font-bold text-center">
            PARTICIPATE IN $VENOMPUMPY<br /> TOKEN PRIVATE SALE 
          </h2>
          <h2 className="md:text-[20px] text-[14px] text-[#898CA9] font-bold text-center">
            Participate in the Private Sales will enable you to UNLOCK ALL  Airdrop rewards you have  accumulated in ALL our Giveaway campaign at launch in mainnet.
          </h2>
          <h2 className="md:text-[20px] text-[14px] text-[#898CA9] font-bold text-center">
            Those who do not Participate in private sales are going to claim at a later date.
          </h2>
          <div className="justify-center block">
          <GraButton className="w-[156px] h-[56px] font-bold block m-auto mt-5">
            <a href="https://privatesale.venompumpy.com/" target="_blank">
              Private Sale
            </a>
          </GraButton>
        </div>
        </div>
      </Fade>
    </section>
  );
};

export default PresaleSection;
