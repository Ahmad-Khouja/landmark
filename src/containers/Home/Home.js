import React, { useContext, useEffect } from "react";
import Time from "./Timeline";
import Destination from "./Destination";
import Cadre from "./Cadre";
import HomeVideo from "../../assets/videos/HomeHeaderVideo.mp4";
import classes from "./Home.module.css";
// import Background from "./Background";
import { NavigationContext } from "../../helper/context";
import Background from "./Background";
import Approach from "./Approach";
import Spanning from "./Spanning";

function Home() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(() => {
    setTabIndex(0);
  });
  return (
    <div id="top" style={{width:"100%"}}>
      {/* <Background /> */}
      <div className={classes.vpc}>
      {/* Video component */}
      <video autoPlay loop>
        <source src={HomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div style={{ position: "absolute",zIndex:"5",top:"0", left:"0"}}>
          <Background />
        </div>
    </div>
      <Approach />
      <Spanning />
      <Destination />
    </div>
  );
}

export default Home;
