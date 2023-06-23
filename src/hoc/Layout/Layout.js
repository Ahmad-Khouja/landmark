import React, { useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import { NavigationContext } from "../../helper/context";
import { BrowserRouter } from "react-router-dom";

const Layout = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <BrowserRouter>
      <NavigationContext.Provider
        value={{
          tabIndex,
          setTabIndex,
        }}
      >
        <header>
          <AppBar />
        </header>
        <main>{props.children}</main>
        <footer>footer</footer>
      </NavigationContext.Provider>
    </BrowserRouter>
  );
};

export default Layout;
