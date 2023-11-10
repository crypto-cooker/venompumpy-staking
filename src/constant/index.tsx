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
    label: "Stake VPumpy",
    href: "/lockYZ",
    icon: "./images/Lock.svg",
  },
  {
    label: "Stake List",
    href: "/stakelist",
    icon: "./images/stakelist.svg",
  },
  {
    label: "Apy Booster",
    href: "/boosted",
    icon: "./images/Boosted.svg",
  },
];
