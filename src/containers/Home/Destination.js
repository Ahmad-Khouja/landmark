import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Elora from '../../assets/images/Elora.png';
import Miranda from '../../assets/images/Miranda.png';
import Adam from '../../assets/images/Adamstown.png';
import Belrose from '../../assets/images/Belrose.png';
import House from '../../assets/images/House1.png';
import classes from './Destination.module.css';
import Fleche from '../../assets/images/fleche.png'
const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
  
    color: theme.palette.text.secondary,
   
height:'100%',
  }));
  
const Destination = () => {
  return (
    <div className={classes.cadre}>
    <div className={classes.title}>Featured Properties</div>
       <Box marginTop="100px">
      <Grid container >
        <Grid item xs={4} md={4} lg={4}  >
          <Item  >
          <img src={House} className={classes.image1}></img>
        
          </Item>
</Grid>

          <Grid item xs={4} md={4} lg={4}  >
          <Item >
            <div className={classes.position}>
          <img src={Elora}  className={classes.photo}>
         
          </img>
       
          <div className={classes.text}>
    Elora, The  hills
    <img src={Fleche} className={classes.fleche}></img>
  </div>
        
          <img src={Miranda}  className={classes.image2}></img>
       
          </div>
          </Item>
</Grid>

          <Grid item xs={4} md={4} lg={4}  >
          <Item >
         <div className={classes.position1}>
          <img src={Adam}  className={classes.image2}></img> 
       
          <img src={Belrose}  className={classes.image2}></img>
       
          </div>  
          </Item>
        </Grid>
       </Grid>
        </Box>
        <div className={classes.posbtn}>
        <button className={classes.bouton}>View All</button>
        </div>
    </div>
  )
} 

export default Destination
