import React from "react";
import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
}

// const CusImgBtn: FC<props> = ({ title }) => {
//   return (
//     <div className="mt-[20px] ml-[15px] hover:bg-[url('/images/btn_back.svg')] active:bg-[url('/images/btn_back.svg')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]">
//       <Image src="./images/dashboardicon.svg" width={150} height={100} className="" alt=""/>
//     </div>
//   );
// };

export default function CusImgBtn({ title }) {
  return (
    <div className="mt-[20px] ml-[15px] hover:bg-[url('/images/btn_back.svg')] active:bg-[url('/images/btn_back.svg')] active:hue-rotate-90 bg-no-repeat bg-left-top w-[233px] h-[56px] py-[16px] pl-[25px]">
      <Image src="./images/dashboardicon.svg" width={150} height={100} className="" alt=""/>
    </div>
  );
};

// export default CusImgBtn;
