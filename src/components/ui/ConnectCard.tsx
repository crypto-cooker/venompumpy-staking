import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ConnectCardProps {
  // className: string;
  title: string;
  iconUrl: string;
  contents: string;
}
export const ConnectCard: React.FC<ConnectCardProps> = ({
  // className,
  title,
  iconUrl,
  contents,
}) => (
  <div className="w-[380px] duration-300 hover:scale-110 py-8 px-6 justify-center block text-center m-[20px] bg-[#1A1B23] rounded-3xl">
    <Image className="m-auto" src={iconUrl} alt="icon" width={88} height={88} />
    <h3 className="my-4 text-4xl font-extrabold">{title}</h3>
    <h6 className="text-[16px] text-[#898CA9]">{contents}</h6>
    <div className="flex justify-center mt-8 flex-nowrap">
      <Link
        href={""}
        className="text-[16px] font-semibold mr-1 text-[#47FD80]"
      >
      </Link>
    </div>
  </div>
);
export default ConnectCard;
