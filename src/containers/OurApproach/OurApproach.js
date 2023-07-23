import React, { useContext, useEffect } from 'react'
import classes from './OurApproach.module.css'
import Unsplash from '../../assets/images/unsplash.png'
import {Box, Stack,styled} from '@mui/material'
import { NavigationContext } from '../../helper/context'

function OurApproach() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(()=>{
    setTabIndex(3);
  });
  const StyledBox =styled(Box)(
      {
         width:'100%', 
         height:"100%"
      
      })
return (
  <div id="top">
      <div className={classes.title}>
      Our Approach
      </div>
      <Box  className={classes.container} >
      <Stack direction={{xs:'column',sm:'row'}}  marginTop="100px" >
<StyledBox  className={classes.left} > 
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
         <div className={classes.paragraphe}>
         Landmark provides the full suite of services from site identification and acquisition through to the marketing of the project and managing the sales process. This includes structuring venture teams, securing all requisite approvals, liaising 
         with building authorities and, ultimately, negotiation with and securing purchasers.
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
         <div className={classes.paragraphe}>
         Landmark manages all elements of the design and construction phase, including working with architects and the design team, all certification and documentation, selection and management of all construction contractors and financial & budget management.
Landmark utilizes world leading information and building management systems to ensure accurate and timely information is shared regularly with investors.
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
         <div className={classes.paragraphe}>
         Landmark provides a full suite of asset management services spanning maintenance, cleaning and security services. Deploying market leading planning and scheduling systems, Landmark ensures the highest quality service at optimized price points. Our security staff are equipped with state of the art technology 
         to ensure that your assets are maintained and secured to the highest standards.
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
         <div className={classes.paragraphe}>
         Landmark provides detailed divestment strategies for investors including securing purchasers,
          negotiating contracts and ensuring seamless handover and funds settlement.
         </div>
       </div>

       </div>
      </div>
      </StyledBox>
      <StyledBox className={classes.right}>
   
<img src={Unsplash} className={classes.splash}></img>

</StyledBox>
</Stack>
</Box>    </div>
)
}

export default OurApproach