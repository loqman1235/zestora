"use client";

import { createContext, useContext, useState } from "react";

interface SidebarContext {
  isOpen: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContext>({
  isOpen: true,
  toggle: () => {},
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");

  return context;
};

export default SidebarProvider;
