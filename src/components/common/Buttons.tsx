import React from "react";

export interface ButtonProps {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: number;
}

export const GraButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  color,
  disabled,
}) => {
  let bgcolor, effect;
  if (color === undefined) {
    color = 0;
  }
  if (color == 0) bgcolor = "linear-gradient(225deg, #80E0FF 14.89%, #47FD80 85.85%)";
  if (color != 0) bgcolor = "linear-gradient(225deg, #363AA5 14.89%, #780599 85.85%)";
  if (disabled) {
    bgcolor = "grey";
    effect = "cursor-not-allowed"
  }
  else {
    effect = "transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300"
  }
  return (

    <button
      className={`${className}  rounded-[10px] ${effect} `}
      disabled={disabled ? true : false}
      onClick={onClick}
      style={{
        background: bgcolor,
        color: color == 0 ? "black" : "white",
      }}
    >
      {children}
    </button>
  );
};
export const TraButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${className} transition ease-in-out delay-150  hover:scale-110 duration-300`}
      onClick={onClick}
      style={{
        background: "transparent",
        color: "white",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      {children}
    </button>
  );
};
export const ConnectButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <>

    </>
  );
};

export default GraButton;
