import React, { useContext, useEffect } from "react";
import Time from "./Timeline";
import Destination from "./Destination";
import Cadre from "./Cadre";
import HomeVideo from "../../assets/videos/HomeHeaderVideo.mp4";
// import Background from "./Background";
import { NavigationContext } from "../../helper/context";

function Home() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(() => {
    setTabIndex(0);
  });
  return (
    <div style={{ marginTop: "20%" }}>
      {/* <Background /> */}
      <Time />
      <Cadre />
      <Destination />
    </div>
  );
}

export default Home;
