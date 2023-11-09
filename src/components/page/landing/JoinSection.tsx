import { ConnectButton } from "@/components/common/Buttons";
import router from "next/router";
import React from "react";
import { Fade } from "react-awesome-reveal";
interface Props { }

const JoinSection = (props: Props) => {
  return (
    <section className="seventh-panel items-center flex w-full z-2 justify-center">
      {/* <Fade triggerOnce direction="up" duration={2000}>
        <div className="grow justify-center md:py-36 sm:py-20 py-10 mx-10 md:items-center md:px-8">
          <div className="flex justify-center">
            <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] text-white font-bold text-center">
              Join our Community now!
            </h2>
          </div>
          <h2 className="md:text-[24px] text-[16px] flex justify-center text-[#898CA9] font-bold">
            Stay Up To Date On New Releases, AMAs, Events, And Updates
          </h2>
          <div className="flex justify-center mt-10">
            <ConnectButton className="w-[304px] h-[56px] " onClick={() => { router.push("https://t.me/Yieldz") }}>
              Venom Discord
            </ConnectButton>

          </div>
        </div>
      </Fade> */}
    </section>
  );
};

export default JoinSection;
