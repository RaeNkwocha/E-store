import React, { useState, createContext } from "react";
export const ExploreContext = createContext();
export const ExploreProvider = (props) => {
  const [display, setDisplay] = useState([]);
  return (
    <ExploreContext.Provider value={[display, setDisplay]}>
      {props.children}
    </ExploreContext.Provider>
  );
};
