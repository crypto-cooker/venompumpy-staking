import React, { ReactChild, useState, useMemo } from "react";

export type SidebarContextState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isSidebarOpen: boolean;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
};

const defaultState = {
  isSidebarOpen: true,
};

interface Props {
  children: ReactChild;
}

// create context
export const SidebarContext = React.createContext<SidebarContextState>(defaultState);
// create provider component
export const SidebarProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
