import React from "react";
import LogoImg from "../../../assets/images/Landmark_Logo_Green.png";
import classes from "./Logo.module.css";
const Logo = ()=>{
    return (
        <img src={LogoImg} className={classes.Logo} alt="logo"/>
    )
}
export default Logo;