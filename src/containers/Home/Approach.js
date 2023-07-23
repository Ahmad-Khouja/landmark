import React from 'react'
import classes from './Approach.module.css'
import Graph from '../../assets/images/graph.png';
import Horizontal from '../../assets/images/horizontal.png';
import Construction from '../../assets/images/construction.png';
import Build from '../../assets/images/build.png';
import Picture from '../../assets/images/picture.png'
import { HashLink } from 'react-router-hash-link';

function Approach() {
    
  return (
    <div>
        <div className={classes.title}> Our Approach</div>
        <div className={classes.container}>
            <div className={classes.total}>
            <div className={classes.posrond}>
        <div className={classes.rond}>
            <div className={classes.posimage}>
       <img src={Graph} href="" className={classes.image}/></div>
        </div>
        <div className={classes.text}>Identification,<br/> Acquisition, Sales &<br/> Marketing</div>
        </div>
        <div>
            <img src={Horizontal} className={classes.horizontal}/>
        </div>
        </div>

<div className={classes.design}>

        <div className={classes.total}>
            <div className={classes.posrond}>
                
        <div className={classes.rond}>
            <div className={classes.posimage}>
       <img src={Construction} href="" className={classes.image}/></div>
        </div>
        <div className={classes.text}>Design & Construction</div>
        </div>
        <div className={classes.pos}>
            <img src={Horizontal} className={classes.horizontal1}/>
        </div>
        </div>


        <div className={classes.total}>
            <div className={classes.posrond}>
        <div className={classes.rond}>
            <div className={classes.posimage}>
       <img src={Build} href="" className={classes.image}/></div>
        </div>
        <div className={classes.text}>Asset Management</div>
        </div>
        <div>
            <img src={Horizontal} className={classes.horizontal1}/>
        </div>
        </div>


        <div className={classes.total}>
            <div className={classes.posrond}>
        <div className={classes.rond}>
            <div className={classes.posimage}>
       <img src={Picture} href="" className={classes.image}/></div>
        </div>
        <div className={classes.text}>Asset Divestment</div>
        </div>
        </div>
        </div>
    </div>
    <div className={classes.posbouton}>
                <HashLink to="/our-approach#top" className={classes.bouton}>Read More</HashLink>
              </div>
    </div>
  )
}

export default Approach