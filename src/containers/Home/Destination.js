import {React, useState} from 'react'
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
import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
  
    color: theme.palette.text.secondary,
   
height:'100%',
  }));
  
const Destination = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
 
    // Add more images and their properties

  const navigate = useNavigate();
  return (
    <div className={classes.cadre}>
    <div className={classes.title}>Featured Properties</div>
       <Box marginTop="100px">
      <Grid container >
        <Grid item xs={4} md={4} lg={4}  >
          <Item  >
            <div className={classes.container}>
          <img src={House} className={classes.image1}></img>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <div>House Of Ryuu</div>
            <img src={Fleche} className={classes.fleche}></img>
            </div>
            </div>
            </div>
          </Item>
</Grid>

          <Grid item xs={4} md={4} lg={4}  >
          <Item >
            <div className={classes.position}>
            <div className={classes.container}>
          <img src={Elora}  className={classes.photo}>
          </img>
          <div className={classes.overlay}>
          <div className={classes.content}>
            <div>Elora, The Hills</div>
            <img src={Fleche} className={classes.fleche}></img>
            </div>
            </div>
          </div>
        
          <div className={classes.container}>
          <img src={Miranda}  className={classes.image2}></img>
          <div className={classes.overlay}>
          <div className={classes.content}>
            <div>Miranda Central</div>
            <img src={Fleche} className={classes.fleche}></img>
            </div>
            </div>
          </div>
       
          </div>
          </Item>
</Grid>

          <Grid item xs={4} md={4} lg={4}  >
          <Item >
         <div className={classes.position1}>
         <div className={classes.container}>
          <img src={Adam}  className={classes.image2}></img> 
          <div className={classes.overlay}>
          <div className={classes.content}>
            <div>Adamstown Living</div>
            <img src={Fleche} className={classes.fleche}></img>
            </div>
            </div>
          </div>

          <div className={classes.container}>
          <img src={Belrose}  className={classes.image2}></img>
          <div className={classes.overlay}>
          <div className={classes.content}>
            <div>The Belrose Collection</div>
            <img src={Fleche} className={classes.fleche}></img>
            </div>
            </div>
          </div>
          </div>  
          </Item>
        </Grid>
       </Grid>
        </Box>
        <div className={classes.posbtn}>
        <button className={classes.bouton} onClick={()=>navigate("/landmark/projects")}>View All</button>
        </div>
    </div>
  )
} 

export default Destination
