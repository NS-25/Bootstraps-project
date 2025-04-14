import React, { createContext, useState } from "react";
import { useContext } from "react";

const PopoverContext = createContext();

export const PopoverProvider = ({ children }) => {
  const [popover, setPopover] = useState({
    isOpen: false,
    position: { top: 0, left: 0 },
    content: "",
  });

  const showPopover = (position, content) => {
    setPopover({ isOpen: true, position, content });
  };

  const hidePopover = () => {
    setPopover((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <PopoverContext.Provider value={{ popover, showPopover, hidePopover }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = () => useContext(PopoverContext);
