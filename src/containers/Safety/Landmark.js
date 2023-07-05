import React from 'react'
import classes from './Landmark.module.css'
import Pinnacle from '../../assets/images/Pinnaclesaf.png'
import Group from '../../assets/images/Group.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({

   padding: theme.spacing(0),
   boxShadow: 'none',
   
  height:"100%"
 }));
function Landmark() {
  return (
    <div>
 <div className={classes.title}> Landmark Asset Ventures</div>
       <Box paddingTop='100px'>
     <Grid container >
       <Grid item xs={12} md={6} lg={6}  >
         <Item className={classes.left}>
          <div className={classes.position}>
          <div  className={classes.red}><img src={Group} className={classes.group}></img></div>       
          <div  className={classes.blue}><img src={Pinnacle} className={classes.unsplash}></img></div>
          <div  className={classes.red1}><img src={Group} className={classes.group1}></img></div>
 </div>
            </Item>

           </Grid>
           <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
 <div className={classes.text}>
 Begin your development journey today.
Landmark is passionate about supporting Architectural,
 Engineering and Construction start-ups through collaborative ventures.
    </div>
    <br/>
    <br/>
    <div className={classes.text1}>
    We are willing to provide the resources required so that projects within our community can become fully operational. Our support is more than just financial, it also provides you with the solutions to understand processes, overcome challenges,
     accelerate growth, and bring architecturally chic and sustainable innovations to market.
    </div>

            </Item>
            </Grid>
            </Grid>
            </Box>
    </div>
  )
}

export default Landmark