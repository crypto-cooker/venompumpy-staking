import { TraButton } from "@/components/common/Buttons";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Landing.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import router from "next/router";
interface Props { }

const ZeroEmission = (props: Props) => {
  return (
    <section className="firth-panel items-center flex w-full z-2 relative">

      {/* <div className={styles.gradient}></div> */}
      {/* <div className="flex-none justify-center md:block hidden w-[40%] ">
        <div className={`${styles.gradient} animate-pulse`}></div>
        <Slide triggerOnce duration={1000}>
          <Image
            className="z-[-100] top-0 right-0 object-cover"
            src="./images/moneybag.svg"
            alt="slider pannel"
            width={500}
            height={500}
          />
        </Slide>
      </div> */}
      {/* <Fade triggerOnce direction="right" duration={2000}>
        <div className="grow justify-center mx-10 md:items-center md:px-8">
          <div className="flex justify-start w-2/3">
            <h2 className="lg:text-[50px]  md:text-[40px] sm:text-[30px] text-[20px] text-white font-bold text-left">
              Zero emission yield generating solutions
            </h2>
          </div>
          <h2 className="md:text-[24px] text-[16px] text-[#898CA9] font-bold">
            Yieldz is a multifaceted Ecosystem and innovative Stablecoin and
            Ethereum farming protocol. Our system include incorporating
            non-stable and stable multi assets pools which will be distributed
            as multi-rewards.
          </h2>
          <div className="md:block justify-center flex">
            <TraButton className="w-[156px] h-[56px] font-bold mt-10 m-auto" onClick={() => { router.push("https://yieldz.gitbook.io/yieldz-protocol/") }}>
              Learn more
            </TraButton>
          </div>
        </div>
      </Fade> */}
    </section>
  );
};

export default ZeroEmission;
