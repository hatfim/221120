import React from "react";
import styles from "./Date.scss"

import { Svg, Button } from "@components";
import ring from "!!raw-loader!./ring.svg";

const Date = () => (
  <section className="wrapper">
    <div className="container">
      <div className={`row ${styles.root}`}>
        <div className="col">
          <Svg svg={ring} />
        </div>
        <div className="col">
          <div className="">
            <p className="label">The Date</p>
            <h2 className="heading--large">SUNDAY<br />
                NOVEMBER 22<br />
                2020</h2>
          </div>
          <div className={styles.rsvp}>
            <p className="label">The Invite</p>
            <p>What we want most for our wedding is to have our friends and family there to celebrate the occasion with us. So more than anything we`re simply grateful for your presence </p>
            <Button href='/about'>RSVP</Button>
          </div>
        </div>
        <a href="#home-block-2" className="js-scroll-down scroll-down">
          <span className="arrow-down"></span>
        </a>
        <div className="bg-black -left"></div>
      </div>
    </div>
  </section>
);

export default Date;

