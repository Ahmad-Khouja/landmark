import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Elora from "../../assets/images/Elora.png";
import Miranda from "../../assets/images/Miranda.png";
import Adam from "../../assets/images/Adamstown.png";
import Belrose from "../../assets/images/Belrose.png";
import House from "../../assets/images/House1.png";
import classes from "./Destination.module.css";
import Fleche from "../../assets/images/fleche.png";
import { Navigate, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,

  height: "100%",
}));

const Destination = () => {
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Add more images and their properties

  return (
    <div className={classes.cadre}>
      <div className={classes.title}>Featured Properties</div>
      <Box marginTop="100px">
        <Grid container>
          <Grid item xs={4} md={4} lg={4}>
            <Item>
            <HashLink style={{textDecoration:"none",color:"white"}} to="/projects#house-of-Ryuu">
              <div className={classes.container}>
                <img src={House} className={classes.image1}></img>
                <div className={classes.overlay}>
                  <div className={classes.content}>
                  <div>House Of Ryuu</div>
                    <img src={Fleche} className={classes.fleche}></img>
                  </div>
                </div>
              </div>
              </HashLink>
            </Item>
          </Grid>

          <Grid item xs={4} md={4} lg={4}>
          <Item>
              <div className={classes.position}>
                <div className={classes.container}>
                <HashLink style={{textDecoration:"none",color:"white"}} to="/projects#the-elora-hills">
                  <img src={Elora} className={classes.photo}></img>
                  <div className={classes.overlay}>
                    <div className={classes.content}>
                    <div>Elora, The Hills</div>

                      <img src={Fleche} className={classes.fleche}></img>
                    </div>
                  </div>
                  </HashLink>
                </div>

                <div className={classes.container}>
                <HashLink style={{textDecoration:"none",color:"white"}} to="/projects#miranda-central">

                  <img src={Miranda} className={classes.image2}></img>
                  <div className={classes.overlay}>
                    <div className={classes.content}>
                      <div>Miranda Central</div>
                      <img src={Fleche} className={classes.fleche}></img>
                    </div>
                  </div>
                  </HashLink>
                </div>
              </div>
              </Item>
          </Grid>

          <Grid item xs={4} md={4} lg={4}>
            <Item>
              <div className={classes.position1}>
                <div className={classes.container}>
                <HashLink style={{textDecoration:"none",color:"white"}} to="/projects#adamstown-living">
                  <img src={Adam} className={classes.image2}></img>
                  <div className={classes.overlay}>
                    <div className={classes.content}>
                      <div>Adamstown Living</div>
                      <img src={Fleche} className={classes.fleche}></img>
                    </div>
                  </div>
                  </HashLink>
                </div>

                <div className={classes.container}>
                <HashLink style={{textDecoration:"none",color:"white"}} to="/projects#the-belrose-collection">

                  <img src={Belrose} className={classes.image2}></img>
                  <div className={classes.overlay}>
                    <div className={classes.content}>
                      <div>The Belrose Collection</div>
                      <img src={Fleche} className={classes.fleche}></img>
                    </div>
                  </div>
                  </HashLink>
                </div>
              </div>

            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className={classes.posbtn}>
        <HashLink className={classes.bouton} to="/projects#top">
          View All
        </HashLink>
      </div>
    </div>
  );
};

export default Destination;
