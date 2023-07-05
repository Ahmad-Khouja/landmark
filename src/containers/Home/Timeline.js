
import * as React from 'react';
import {Box, Stack,styled} from '@mui/material'
import classes from './Timeline.module.css'
import Unsplash from '../../assets/images/unsplash2.png'
function Time() {
  const StyledBox =styled(Box)(
    {
        
        width:"100%",
    })
  return (
    <div>
       <Box  className={classes.container}>
        <Stack direction={{xs:'column',sm:'row'}}  marginTop="100px" >
<styledBox  className={classes.left} > 
<img src={Unsplash} className={classes.image}></img>
</styledBox>
<StyledBox  className={classes.right}>
<div >
         <div className={classes.soustitre} >  Our Approach</div>
         <div className={classes.total}>
         <div className={classes.position}>
            <div className={classes.nombre}>1</div>
          <div className={classes.vector}></div>
         </div>
         <div className={classes.cadre}>
           <div className={classes.intertitre}>
           Identification, Acquisition, Sales & Marketing<br/>
           </div>
         
         </div>

         </div>

         <div className={classes.total}>
         <div className={classes.position1}>
            <div className={classes.nombre}>2</div>
          <div className={classes.vector}></div>
         </div>
         <div className={classes.cadre1}>
           <div className={classes.intertitre}>
           Design & Construction<br/>
           </div>
        
         </div>

         </div>

          

          
         <div className={classes.total}>
         <div className={classes.position1}>
            <div className={classes.nombre}>3</div>
          <div className={classes.vector}></div>
         </div>
         <div className={classes.cadre1}>
           <div className={classes.intertitre}>
           Asset Management<br/>
           </div>
         
         </div>

         </div>




         <div className={classes.total}>
         <div className={classes.position1}>
            <div className={classes.nombre}>4</div>
          
         </div>
         <div className={classes.cadre1}>
           <div className={classes.intertitre}>
           Asset Divestment<br/>
           </div>
        
         </div>

         </div>
         <br/>  <br/>
         <div>
          <button className={classes.bouton} >Read More</button>
         </div>
        </div>
</StyledBox>
</Stack>

</Box>        
    </div>
  )
}

export default Time