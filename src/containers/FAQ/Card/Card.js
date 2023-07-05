import React from "react";
import classes from "./Card.module.css"


const Card=(props)=>{

    return (
        <div className={classes.Parent}>
            <div className={classes.div1}>
                <div className={classes.circleLabel}>
                <span className={classes.questionMark}>?</span>
                </div>
            </div>
            <div className={classes.div2}>
                <h4 className={classes.Title}>{props.title}</h4>
                <p className={classes.Paragraph}>{props.paragraph}</p>
            </div>
        </div>
    );
}

export default Card;