import React, { useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import { NavigationContext } from "../../helper/context";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  const [tabIndex, setTabIndex] = useState();
  return (

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
        <Footer/>
      </NavigationContext.Provider>

  );
};

export default Layout;
