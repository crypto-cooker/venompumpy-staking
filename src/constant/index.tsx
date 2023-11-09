export type NavItem = {
  label: string;
  href: string;
  icon: string;
};
export const MenuItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "./images/dasboardicon.svg",
  },
  {
    label: "STAKE VPUMPY",
    href: "/lockYZ",
    icon: "./images/Lock.svg",
  },
  {
    label: "Stakelist",
    href: "/stakelist",
    icon: "./images/stakelist.svg",
  },
  {
    label: "Boost APY",
    href: "/boosted",
    icon: "./images/Boosted.svg",
  },
  // {
  //   label: "Bond",
  //   href: "/bonded",
  //   icon: "./images/Bond.svg",
  // },
  // {
  //   label: "Governence",
  //   href: "/#",
  //   icon: "./images/Governence.svg",
  // },
];
