import React from "react";
import Link from "next/link";
import Image from "next/image";
const SocialButtons = () => {
  return (
    <li>
      <div className="max-md:hidden flex justify-around pl-8">

        <Link
          href="https://discord.com/invite/Sjrm3CJMdb"
          className="z-10 max-md:hidden"
        >
          <Image
            src="./icon/discord.svg"
            alt="discord"
            width={25}
            height={25}
            className="hover:hue-rotate-90  active:hue-rotate-180"
          />
        </Link>

        <Link href="https://t.me/venomart_space" className="z-10 max-md:hidden">
          <Image
            src="./icon/telegram.svg"
            alt="telegram"
            width={25}
            height={25}
            className="hover:hue-rotate-180 active:hue-rotate-60"
          />
        </Link>
        <Link
          href="https://twitter.com/venommemepumpy"
          className="z-10 max-md:hidden"
        >
          <Image
            src="./icon/twitter.svg"
            alt="twitter"
            width={25}
            height={25}
            className="hover:-hue-rotate-60  active:hue-rotate-90"
          />
        </Link>
      </div>
    </li>
  );
};

export default SocialButtons;
