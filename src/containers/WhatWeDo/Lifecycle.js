import React from 'react'
import classes from './Lifecycle.module.css'
import One from '../../assets/images/11.png'
import Two from '../../assets/images/2.png'
import Three from '../../assets/images/3.png'
import Four from '../../assets/images/4.png'
function Lifecycle() {
  return (<div className={classes.total}>
    <div className={classes.container}>
<div className={classes.position}>
    <div className={classes.image}> <img src={One} className={classes.one}/></div>
   
    <div className={classes.card}>
        <div className={classes.text}>
        Landmark identifies sites, conducts due diligence, establishes appropriate venture structures, 
        negotiates contracts, planning approvals and all council compliance. Landmark coordinates
         all sales and marketing activities including identifying and quantifying market demand.
        </div>
    
    </div>
</div>
<div className={classes.position}>
    <div className={classes.image}> <img src={Two} className={classes.one}/></div>
    
    <div className={classes.card}>
        <div className={classes.text}>
        Landmark team completes all building and construction of projects including, managing the design process, ensuring all requisite approvals, managing pricing and project
         budget process, reporting and information management optimisation using market leading technology.
        </div>
    </div>
 
</div>

<div className={classes.position}>
    <div className={classes.image}> <img src={Three} className={classes.one}/></div>
    
    <div className={classes.card}>
        <div className={classes.text}>
        Landmark provides full asset management services including facilities maintenance, 
        cleaning and the provision of security incorporating the latest technologies and processes.
        </div>

    </div>
</div>

<div className={classes.position}>
    <div className={classes.image}> <img src={Four} className={classes.one}/></div>
  
    <div className={classes.card}>
        <div className={classes.text}>
        Landmark works with investor to optimize divestment strategies.
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default Lifecycle