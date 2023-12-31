import React from "react";
import classes from "./Cadre.module.css";
import { Box, Stack, styled } from "@mui/material";
import Rectangle from "../../assets/images/Rectangle.png";
import Splash from "../../assets/images/unsplash3.png";

function Cadre() {
  const StyledBox = styled(Box)({
    height: "390px",
  });
  return (
    <div>
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }} marginTop="100px">
          <StyledBox className={classes.left}>
            <div className={classes.position}>
              <div>
                <img src={Rectangle} className={classes.image}></img>
              </div>
              <div className={classes.position1}>
                <div className={classes.title}>
                  {" "}
                  Spanning the whole property lifecycle
                </div>
                <div className={classes.paragraphe}>
                  Landmark is an innovative, dynamic property development
                  organization based in Sydney, Australia.
                </div>
              </div>
            </div>
          </StyledBox>
          <StyledBox className={classes.right}>
            <img src={Splash} className={classes.photo} alt="splash"></img>
          </StyledBox>
        </Stack>
      </Box>
    </div>
  );
}

export default Cadre;
