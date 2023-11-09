// import { useState, useEffect } from "react";
import React, { FC, useEffect } from "react";
// import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Container from "./Container";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  color: number; //purple or green   1 or 0
}
const myround = (amount: string) => {
  //in: String
  const samount =
    Math.round((parseFloat(amount) + Number.EPSILON) * 10000) / 10000;
  return samount.toString(); //out: string 100.0020030442 -> 100.002
};
export const Layout = ({ children,color }: LayoutProps) => {
  return (
    <>
      <Header color={color} />
      <div className="flex w-[100vw]">
        <Image
          className="z-[-2] fixed top-[-376px] left-0"
          src={`./images/back_gra${color ? "_p.svg" : ".svg"}`}
          alt="slider pannel"
          width={1760}
          height={1079}
        />
        <Sidebar color={color} />
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default Layout;
