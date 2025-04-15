import { createContext, useContext, useState } from "react";

const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const [visibleId, setVisibleId] = useState(null);

  const toggleCollapse = (id) => {
    setVisibleId((prev) => (prev === id ? null : id));
  };
  return (
    <CollapseContext.Provider value={{ visibleId, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = () => useContext(CollapseContext);
