import React from "react";
import classes from "./Footer.module.css"
import Logo from "../../assets/images/LandmarkLogo.png";
import { Facebook,Twitter,YouTube,Instagram,Google } from "@mui/icons-material";
import "./Footer.module.css"
import { useNavigate } from "react-router-dom";

const Footer=()=>{
    const navigate = useNavigate();
return (
<footer className={classes.Parent}>
<hr className={classes.Line}></hr>
<div className={classes.Center}>
    <div className={classes.LeftPanel}>
    <div><img src={Logo} className={classes.image} alt="logo"></img></div>
    </div>
<div className={classes.RightPanel}>
<div className={classes.TapPanel}>
<button className={classes.MUIButton} > ABOUT US</button>
<button className={classes.MUIButton} > PROJECTS</button>
<button className={classes.MUIButton} > FAQ'S</button>
<button className={classes.MUIButton} > CAREERS</button>
<button className={classes.MUIButton} onClick={()=>navigate("/landmark/terms-and-conditions")}> TERMS & CONDITIONS</button>
<button className={classes.MUIButton}> CONTACT US</button>
</div>
<div className={classes.IconsPanel}>
<button className={classes.MUIButton} >
    Social Media
</button>
<Facebook style={{color:'white'}}/>
<Twitter style={{color:'white'}}/>
<YouTube style={{color:'white'}}/>
<Instagram style={{color:'white'}}/>
<Google style={{color:'white'}}/>

</div>
</div>
</div>
<hr className={classes.Line}></hr>
</footer>
);
}

export default Footer;