import { createContext, useContext, useState } from "react";

const PopoverContext = createContext();

export const PopoverProvider = ({ children }) => {
  const [activePopoverId, setActivePopoverId] = useState(null);

  const showPopover = (id) => {
    setActivePopoverId(id);
  };

  const hidePopover = () => {
    setActivePopoverId(null);
  };

  return (
    <PopoverContext.Provider
      value={{ activePopoverId, showPopover, hidePopover }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = () => useContext({ PopoverContext });
