import React from "react";
import LogoImg from "../../../assets/logos/Landmark_Logo_Green.png";
import classes from "./Logo.module.css";
const Logo = ()=>{
    return (
        <img src={LogoImg} className={classes.Logo}/>
    )
}
export default Logo;