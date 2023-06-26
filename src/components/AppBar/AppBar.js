import React, { useContext, useState } from "react";
import classes from "./AppBar.module.css";
import {
  Menu,
  MenuItem,
  Tab,
  Tabs,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../../helper/context";
import { xsTheme, smTheme, mdTheme, lgTheme, xlTheme, gfTheme } from "./theme";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo/Logo";

const AppBar = () => {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  const navigate = useNavigate();

  const isGfScreen = useMediaQuery("(min-width:0px) and (max-width: 300px");
  const isXsScreen = useMediaQuery("(min-width:300px) and (max-width: 680px");
  const isSmScreen = useMediaQuery("(min-width:600px) and (max-width: 900px)");
  const isMdScreen = useMediaQuery("(min-width:900px) and (max-width: 1200px)");
  const isLgScreen = useMediaQuery(
    "(min-width:1200px) and (max-width: 1535px)"
  );

  const displayDrawer = (isGfScreen || isXsScreen) ? "flex" : "none";
  const displayAppBar = !(isGfScreen || isXsScreen) ? "flex" : "none";
  
  // POP UP MENU CONTROLS
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <ThemeProvider
      theme={
        isGfScreen
          ? gfTheme
          : isXsScreen
          ? xsTheme
          : isSmScreen
          ? smTheme
          : isMdScreen
          ? mdTheme
          : isLgScreen
          ? lgTheme
          : xlTheme
      }
    >
      {/* MOBILE */}
      <div style={{ display: displayDrawer }} className={classes.AppBarMobile}>
        <MenuIcon className={classes.MenuIcon} onClick={handleClick} />
        <div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();navigate("/");}}><p>Home</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/about-us");}}><p>About Us</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/projects");}}><p>Projects</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/our-approach");}}><p>Our Approach</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/safety-and-sustainability");}}><p>Safety & Sustainability</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/what-we-do");}}><p>What We Do</p></MenuItem>
        <MenuItem onClick={()=>{handleClose();navigate("/contact-us");}}><p>Contact Us</p></MenuItem>
      </Menu>
    </div>
        <Logo/>
      </div>
      {/* LARGE SCREENS */}
      <div style={{ display: displayAppBar }} className={classes.AppBarLarge}>
        <Logo />
        <Tabs
          value={tabIndex}
          onChange={(event, value) => {}}
          indicatorColor="#04AAE0"
          TabIndicatorProps={{ children: <span /> }}
        >
          <Tab
            disableRipple
            label="Home"
            onClick={() => {
              navigate("/");
            }}
          />
          <Tab
            disableRipple
            label="About Us"
            onClick={() => {
              navigate("/about-us");
            }}
          />
          <Tab
            disableRipple
            label="Projects"
            onClick={() => {
              navigate("/projects");
            }}
          />
          <Tab
            disableRipple
            label="Our Approach"
            onClick={() => {
              navigate("/our-approach");
            }}
          />
          <Tab
            disableRipple
            label="Safety & Sustainability"
            onClick={() => {
              navigate("/safety-and-sustainability");
            }}
          />
          <Tab
            disableRipple
            label="What We Do"
            onClick={() => {
              navigate("/what-we-do");
            }}
          />
          <Tab
            disableRipple
            label="Contact Us"
            onClick={() => {
              navigate("/contact-us");
            }}
          />
        </Tabs>
      </div>
    </ThemeProvider>
  );
};

export default AppBar;
