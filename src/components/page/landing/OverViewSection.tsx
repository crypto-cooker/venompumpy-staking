import React from "react";
import Image from "next/image";
import styles from "@/styles/Landing.module.css";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
interface Props { }

const OverViewSection = (props: Props) => {
  return (
    <section className="fifth-panel relative w-full z-2 my-32">
      {/* <div className={styles.gradient2}></div>
      <div className="justify-center mx-10 md:items-center md:px-8">
        <Fade triggerOnce direction="up" duration={2000}>
          <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] text-white font-bold text-center">
            Yieldz Ecosystem Overview
          </h2>
          <h2 className="md:text-[24px] text-[16px] text-[#898CA9] font-bold text-center">
            Yieldz Protocol uses an internally developed multi-level economic
            model to avoid inflation and emissions.
          </h2>
        </Fade>
        <div className="justify-center flex">
          <div className="flex justify-center flex-nowrap my-8">
            <Link
              href="https://yieldz.gitbook.io/yieldz-protocol/"
              className="text-[16px] font-semibold mr-3 text-[#47FD80]"
            >
              Learn
            </Link>
            <Image src={"/icon/arrow.svg"} alt="icon2" width={15} height={15} />
          </div>
        </div>
        <Fade triggerOnce direction="up" duration={3000}>
          <Image
            className="z-[-9999] object-cover m-auto"
            src="./images/chart.svg"
            alt="chart pannel"
            width={1000}
            height={1000}
          />
        </Fade>
      </div> */}
    </section>
  );
};

export default OverViewSection;
