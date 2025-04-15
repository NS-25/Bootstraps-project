import { createContext, useContext, useState } from "react";

const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleCollapse = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };
  return <CollapseContext.Provider>{children}</CollapseContext.Provider>;
};

