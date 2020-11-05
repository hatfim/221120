import React from "react";
import { Svg } from "@components";

import styles from "./Hero.scss"
import logo from "!!raw-loader!./logo.svg";

class Hero extends React.Component {
  handleScroll = e => {
    console.log(e);

  }

  render() {
    return (
      <section className={styles.root} onScroll={this.handleScroll}>
        <a className={styles.logo}>
            <Svg svg={logo} />
        </a>
      </section>
    )
  }
};

export default Hero;

