import React from 'react'
import classes from './Sustainability.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Group from '../../assets/images/GroupRed.png'
import Groupblue from '../../assets/images/Group.png'
import Substain from '../../assets/images/Sustain.png'
const Item = styled(Paper)(({ theme }) => ({

   padding: theme.spacing(0),
   boxShadow: 'none',
   
  height:"100%"
 }));
function Sustainability() {
  return (
    <div>
    <div className={classes.title}> Sustainability</div>
   <Box paddingTop='100px' className={classes.container}>
 <Grid container >
   <Grid item xs={12} md={6} lg={6}  >
     <Item className={classes.left}>
      <div className={classes.position}>
        <div> <img src={Group} className={classes.group}></img></div>
        </div>
<div> 
    <div className={classes.text}>
    We collaborate with our clients and partners to deliver tangible
     environmental outcomes supported by evidence gathered through the design and building process.
    </div>
    <br/>
    <br/>
    <div className={classes.text1}>
    We work with energy efficiency experts, renewable energy providers 
    and sustainability experts to work towards creating net zero carbon buildings by 2030.
    </div>
</div>
        </Item>

       </Grid>
       <Grid item xs={12} md={6} lg={6}  >
       <Item className={classes.right}>
          <div className={classes.container}>
          <div  className={classes.red}><img src={Groupblue} className={classes.group1}></img></div>       
          <div  className={classes.blue}><img src={Substain} className={classes.unsplash}></img></div>
        
 </div>
            </Item>
        </Grid>
        </Grid>
        </Box>

</div>

  )
}

export default Sustainability