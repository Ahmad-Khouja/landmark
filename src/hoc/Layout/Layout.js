import React, { useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import { NavigationContext } from "../../helper/context";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [tabIndex, setTabIndex] = useState();
  return (

      <NavigationContext.Provider
        value={{
          tabIndex,
          setTabIndex,
        }}
      >
        <header style={{position:"absolute",top:"0", left: "0",width: "100%", zIndex: "5"}}>
          <AppBar />
        </header>
        <main style={{paddingTop:tabIndex!==0? "8%":"0%"}}>{props.children}</main>
        <Footer/>
      </NavigationContext.Provider>

  );
};

export default Layout;
