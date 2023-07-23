import React, { useContext, useEffect } from "react";
import absImage from '../../assets/images/unsplash_3kdroYxiOn4.png';
import classes from "./AboutUs.module.css";
import MySwiper from "./Swiper";
import Text from "./Text";
import { NavigationContext } from '../../helper/context';

function AboutUs(){
    const { tabIndex, setTabIndex } = useContext(NavigationContext);
    useEffect(()=>{
      setTabIndex(1);
    });
const images = [
    absImage,
    absImage,
    absImage,
    // Add more image URLs as needed
  ];
  


return (
    <div id="top"  className={classes.Parent}>

    <div className={classes.Container}>
        <div className={classes.AboutUs}>
        <div className={classes.FirstSection}>
            <div className={classes.FirstLeft}><h1 className={classes.Title1}>About Us</h1></div>
            <div className={classes.FirstRight}><p className={classes.paragraph1}>
                The Landmark team has been operating in the Australian market for more
than 35 years. They work across all sectors of the property market,
residential, commercial, and industrial.<br/><br/>

Residential projects span iconic heritage building revitalization through to
expansive, market leading senior living environments. Residential projects
are focused on improved living environments including creating
sustainable natural surroundings and multiple, luxury facilities such as
cinemas, gyms, and entertainment venues.</p></div>
        </div>
        <div className={classes.SecondSection}><img width='100%' height='100%' src={absImage}></img></div>
        </div>
        
    </div>
    <div className={classes.OurPr}>
        <h1>Our Projects</h1>
    </div>

    <MySwiper />
    <Text />
    </div>
     
)
}

export default AboutUs;