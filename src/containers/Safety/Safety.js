import React, { useContext, useEffect } from 'react'
 import classes from './Safety.module.css'
import Unsplash from '../../assets/images/unsplashsaf.png'
 import Group from '../../assets/images/Group.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavigationContext } from '../../helper/context';
const Item = styled(Paper)(({ theme }) => ({

   padding: theme.spacing(0),
   boxShadow: 'none',
   
  height:"100%"
 }));

function Safety() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(()=>{
    setTabIndex(2);
  });
  return (
     <div>
        <div className={classes.title}> Safety</div>
       <Box paddingTop='100px'>
     <Grid container  >
       <Grid item xs={12} md={6} lg={6}  >
         <Item className={classes.left}>
          <div className={classes.position}>
          <div  className={classes.red}><img src={Group} className={classes.group}></img></div>       
          <div  className={classes.blue}><img src={Unsplash} className={classes.unsplash}></img></div>
          <div  className={classes.red1}><img src={Group} className={classes.group1}></img></div>
 </div>
            </Item>

           </Grid>
           <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
 <div className={classes.text}>
 Landmark has a strict approach to safety with a goal that our people go home safe and healthy from our workplaces.
  We continuously work to enhance our safety culture and standards.
    </div>
    <br/>
    <br/>
    <div className={classes.text1}>
    Not only does an embedded safety culture benefit our people, but it also delivers better long-term value to our clients as we strive
     to integrate safety controls that minimise and eliminate risks from all our projects.
    </div>

            </Item>
            </Grid>
            </Grid>
            </Box>

   </div>
   ) }

 export default Safety






