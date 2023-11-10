import React from "react";
import Image from "next/image";
import { ConnectButton } from "@/components/common/Buttons";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import styles from "@/styles/Landing.module.css";
import router from "next/router";

interface Props { }

const SupportSection = (props: Props) => {
  return (
    <section className="relative mt-20 support">
      <div className={styles.gradient3}></div>
      <div className="grid grid-cols-2 md:px-32 mb-20 md:py-10">
        <div className="md:px-16 px-0 md:w-[30%] w-[100%] mt-10">
          <h2 className="text-[14px] text-[#898CA9]">
            ©2023 VENOMPUMPY, All right reserved.
          </h2>
        </div>
        <div className="flex flex-col justify-around text-left text-[14px] md:w-[20%] w-[30%] mt-10  text-[#898CA9]">
          <h2>
            <Link href="https://twitter.com/venommemepumpy" className="underline">
              Twitter
            </Link>
          </h2>
          <h2>
            {" "}
            <Link href="https://discord.com/invite/Sjrm3CJMdb" className="underline">
              Discord
            </Link>
          </h2>
          <h2>
            {" "}
            <Link href="https://t.me/venomart_space" className="underline">
              Telegram
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
