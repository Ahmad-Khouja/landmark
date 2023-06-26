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
import { Themes } from "./theme";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo/Logo";

const AppBar = () => {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  const navigate = useNavigate();

  const isGfScreen = useMediaQuery("(min-width:0px) and (max-width: 300px");
  const isXsScreen = useMediaQuery("(min-width:300px) and (max-width: 600px");
  const isSmScreen = useMediaQuery("(min-width:600px) and (max-width: 900px)");
  const isMdScreen = useMediaQuery("(min-width:900px) and (max-width: 1200px)");
  const isLgScreen = useMediaQuery(
    "(min-width:1200px) and (max-width: 1535px)"
  );

  const displayDrawer = isGfScreen || isXsScreen ? "flex" : "none";
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
          ? Themes(tabIndex).gfTheme
          : isXsScreen
          ? Themes(tabIndex).xsTheme
          : isSmScreen
          ? Themes(tabIndex).smTheme
          : isMdScreen
          ? Themes(tabIndex).mdTheme
          : isLgScreen
          ? Themes(tabIndex).lgTheme
          : Themes(tabIndex).xlTheme
      }
    >
      {/* MOBILE */}
      <div
        className={tabIndex === 0 ? classes.HeaderMobile : ""}
        style={{ display: displayDrawer === "flex" ? "block" : "none" }}
      >
        <div
          style={{ display: displayDrawer }}
          className={classes.AppBarMobile}
        >
          <MenuIcon
           className={classes.MenuIcon}
           style={{color: tabIndex === 0 ? "white" : "black"}}
          onClick={handleClick} />
          <div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark");
                }}
              >
                <p>Home</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/about-us");
                }}
              >
                <p>About Us</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/projects");
                }}
              >
                <p>Projects</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/our-approach");
                }}
              >
                <p>Our Approach</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/safety-and-sustainability");
                }}
              >
                <p>Safety & Sustainability</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/what-we-do");
                }}
              >
                <p>What We Do</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/landmark/contact-us");
                }}
              >
                <p>Contact Us</p>
              </MenuItem>
            </Menu>
          </div>
          <Logo />
        </div>
      </div>
      {/* LARGE SCREENS */}
      <div
        className={tabIndex === 0 ? classes.HeaderLarge : ""}
        style={{ display: displayAppBar === "flex" ? "block" : "none" }}
      >
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
                navigate("/landmark");
              }}
            />
            <Tab
              disableRipple
              label="About Us"
              onClick={() => {
                navigate("/landmark/about-us");
              }}
            />
            <Tab
              disableRipple
              label="Projects"
              onClick={() => {
                navigate("/landmark/projects");
              }}
            />
            <Tab
              disableRipple
              label="Our Approach"
              onClick={() => {
                navigate("/landmark/our-approach");
              }}
            />
            <Tab
              disableRipple
              label="Safety & Sustainability"
              onClick={() => {
                navigate("/landmark/safety-and-sustainability");
              }}
            />
            <Tab
              disableRipple
              label="What We Do"
              onClick={() => {
                navigate("/landmark/what-we-do");
              }}
            />
            <Tab
              disableRipple
              label="Contact Us"
              onClick={() => {
                navigate("/landmark/contact-us");
              }}
            />
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppBar;
