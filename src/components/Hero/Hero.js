import React from "react";
import { Image, Svg } from "@components";

import styles from "./Hero.scss"
import heroImage from "@static/images/hero.jpg";
import logo from "!!raw-loader!./logo.svg";

class Hero extends React.Component {
  handleScroll = e => {
    console.log(e);
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  }

  render() {
    return (
      <section className={styles.root} onScroll={this.handleScroll}>
        <a className={styles.logo}>
            <Svg svg={logo} />
        </a>

        <div className={styles.image}>
          <img src={heroImage} />
        </div>
      </section>
    )
  }
};

export default Hero;

