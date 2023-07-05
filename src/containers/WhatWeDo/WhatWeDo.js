import React, { useContext, useEffect } from "react";
import classes from "./WhatWeDo.module.css";
import image1 from "../../assets/images/The Belrose Collection 2.png";
import image2 from "../../assets/images/unsplash_WHPsxhB4mWQ.png";
// import bkgimage from "../../assets/images/unsplash_QdAAasrZhdk.png";
import Lifecycle from "./Lifecycle";
import { NavigationContext } from "../../helper/context";

function WhateWeDo(){
    const { tabIndex, setTabIndex } = useContext(NavigationContext);
    useEffect(()=>{
      setTabIndex(5);
    });
return (
    <div className={classes.container}>
        <div className={classes.div1}>
            <h1 className={classes.div1title}>What we Do</h1>
            
        </div>
        <div className={classes.div2}>
        <img src={image1} className={classes.div2image}></img>
            
        </div>
        <div className={classes.div3}>
            <div className={classes.div3left}>
                <h2 className={classes.div3lefttitle}>Spanning the whole property lifecycle</h2>
            </div>
            <div className={classes.div3right}>
                <p className={classes.div3rightparagraph}>
                Landmark is an innovative, dynamic property development organisation based in Sydney, Australia.<br/><br/><br/>
                 Working across the full spectrum of commercial, retail, residential and industrial assets/images, the organisation is led by a partnership of three seasoned professionals with deep skills and expertise.<br/><br/>
                  Uniquely, Landmark services span the entire property lifecycle. This includes identifying opportunities, through to their marketing and sales, project development, building & construction, maintenance, distributive technologies, and ongoing management including investment exit strategies.
                </p>
            </div>
        
        </div>
        <div className={classes.div4}>
            <div className={classes.div41}>
                <h2 className={classes.div41title}>Time To Invest</h2>
            </div>
            <div className={classes.div42}>
                <p className={classes.div42paragraph}>
                There has never been a better time to invest in Australia’s building industry as we face unprecedented demand for new stock across all sectors. Australia represents a stable and safe country for investment, rating AAA across major indices.
                </p>
            </div>
            <div className={classes.div43}>
                <img src={image2} className={classes.div43image}></img>
            </div>
        </div>
        <Lifecycle />
        <div className={classes.div6}>
            <div className={classes.div6div1}>
                <h2 className={classes.div6div1title}>New South Wales Insights</h2>
            </div>
            <div className={classes.div6div2}>
                <p className={classes.div6div2paragraph}>
                • Serviced and development-ready greenfield land supply is significantly constrained in Sydney, and it can take several years to bring new supply to market. This limits the industry’s ability to meet demand as population growth recovers to pre-pandemic levels. A shortage of multi-unit dwellings is predicted over the next three years (National Housing Finance and Investment Corporation, 2022).<br/><br/><br/> • Research by commercial property managers Colliers showed that A$5.3 billion was invested in CBD offices in 2021, which represents a 40 per cent gain on 2020.<br/><br/><br/> • Like many other markets across the world, the shift to online shopping continues to drive demand for industrial and logistics real estate within Sydney, Australia’s most populous city.<br/><br/><br/> • Large Australian bank, Westpac, notes that major global funds, local listed and unlisted funds, and private developers are driving demand. They have seen few new entrants come into the sector in the last year, with the growth coming from owners who were already in the market before the pandemic.
                </p>
            </div>
        </div>
    </div>
);
}

export default WhateWeDo;