import React from "react";
import classes from "./Background.module.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Background() {
  const navigate = useNavigate();
  return (
    <section className={classes.home} id="home">
      <div className={classes.content}>
        <div class={classes.title}>
          A Brand-New Approach To Property In Australia
        </div>
        <div class={classes.soustitre}>
          The Landmark team has been operating in the Australian market for more
          than 35 years. They work across all sectors of the property market,
          residential, commercial, and industrial.
        </div>

        <HashLink scroll={false} to="/about-us#top"
          className={classes.bouton}
        >
          Read More
        </HashLink>
      </div>
    </section>
  );
}

export default Background;
