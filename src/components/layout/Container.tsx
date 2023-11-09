import { TraButton } from "../common/Buttons";
import React from "react";
import Image from "next/image";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  color: number; //purple or green   1 or 0
}
const Container = ({ children }) => {
  return (
    <>
      <div className="z-[2] rounded-3xl h-[100vh] lg:w-[100%] px-10">
        {children}
      </div>
    </>
  );
};
export default Container;
