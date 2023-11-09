import * as React from "react";
import { FC } from "react";
import MenuItem from "./MenuItem";
import { MenuItems } from "@/constant";
import SocialButtons from "./SocialButtons";
import Link from "next/link";
import Image from "next/image";
interface props {
  color: number;
}

const Sidebar: FC<props> = ({ color }: props) => {
  const [baropen, setBaropen] = React.useState<boolean>(false);
  return (
    <>
      <div className="min-[378px]:pt-[47px] pt-[100px] absolute md:hidden z-[9]">
        <div className="invert">
          <Image
            src="./icon/hamburger.svg"
            alt="logo"
            className="ml-[20px]"
            width={24}
            height={24}
            onClick={() => {
              setBaropen(!baropen);
              // console.log(baropen);
            }}
          />
        </div>
      </div>
      <ul className="max-md:hidden md:w-[250px] md:sticky md:top-3 md:z-0 md:h-[100%] md:-translate-x-0 md:mt-6 md:ml-6">
        {MenuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              href={item.href}
              icon={item.icon}
              label={item.label}
              color={color}
            />
          );
        })}
        <SocialButtons />
      </ul>
      {baropen && (
        <div
          className="fixed z-[10] w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center pt-[100px]"
        >
          <div className="relative">
            
            <Link
              href="dashboard"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/dasboardicon.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                Dashboard
              </h2>
            </Link>
            <Link
              href="/lockYZ"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/Lock.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                STAKE VPUMPY TOKEN
              </h2>
            </Link>
            <Link
              href="/stakelist"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/stakelist.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                Stake List
              </h2>
            </Link>
            <Link
              href="/boosted"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/Boosted.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                Boosted VM
              </h2>
            </Link>
            <Link
              href="/bonded"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/Bond.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                Bond
              </h2>
            </Link>
            <Link
              href="#"
              className="flex align-middle cursor-pointer mt-[20px] ml-8 hover:bg-[url('/images/${btnBack}')] active:bg-[url('/images/${btnBack}')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]"
              onClick={() => setBaropen(false)}
            >
              <Image
                src="./images/Governence.svg"
                alt="logo"
                className=""
                width={24}
                height={24}
              />
              <h2 className="text-white text-[18px] font-medium ml-[19px]">
                Governence
              </h2>
            </Link>
            <p
              className="fixed right-10 top-10 text-[40px]"
              onClick={() => setBaropen(false)}
            >
              X
            </p>
            <div className="flex justify-center absolute bottom-10 w-[100%]">
              <Link href='https://discord.com/invite/Sjrm3CJMdb' className="">
                <Image
                  src="./icon/discord.svg"
                  alt="discord"
                  width={30}
                  height={30}
                  className="hover:hue-rotate-90 active:hue-rotate-180"
                />
              </Link>
              <Link href='https://t.me/venomart_space' className="mx-[30px]">
                <Image
                  src="./icon/telegram.svg"
                  alt="telegram"
                  width={30}
                  height={30}
                  className="hover:hue-rotate-180 active:hue-rotate-60"
                />
              </Link>
              <Link href='https://twitter.com/venommemepumpy' className="">
                <Image
                  src="./icon/twitter.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                  className="hover:-hue-rotate-60 active:-hue-rotate-180"
                />
              </Link>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
