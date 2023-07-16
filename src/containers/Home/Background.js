import React from 'react'
import classes from './Background.module.css'
import { useNavigate } from 'react-router-dom'

function Background() {
  const navigate = useNavigate();
  return (
  <section className={classes.home} id="home">
    
    <div className={classes.content} >
     <div className={classes.title}>A brand-new approach to property in Australia</div>
     <div className={classes.soustitre}>The Landmark team has been operating in the Australian market for more than 35 years. They work across
         all sectors of the property market, residential, commercial, and industrial.</div>
        
         <button className={classes.bouton} onClick={()=>{navigate("/landmark/about-us")}}> Read More</button>
       
    </div>
   
    
    </section>
  )
}

export default Background