import React from "react";
import ThemeContext from "./themeContext";
import CompA from "./CompA";

const Index = () => {
  return (
    <ThemeContext.Provider value="green">
      <CompA />
    </ThemeContext.Provider>
  );
};

export default Index;
