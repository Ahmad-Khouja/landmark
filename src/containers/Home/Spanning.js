import React from 'react'
import classes from './Spanning.module.css'
import Unsplash from '../../assets/images/unsplashUpdate.png'
function Spanning() {
  return (
    <div >
 <div className={classes.title}>
Spanning the whole
        <br/>
        property lifecycle
        </div>
<div className={classes.container}>
    <div className={classes.imgpos}>
      <img src={Unsplash} alt="Image" className={classes.image} /></div>
      <div className={classes.overlay}>
        <h2 className={classes.text}>
            Landmark is an innovative,dynamic property development organization
            based in Sydney,Australia.
        </h2>
      </div>
    </div>
    </div>
  )
}

export default Spanning