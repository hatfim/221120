import React from "react";
import styles from "./Nav.scss"

const Nav = () => (
  <nav id="nav" className={styles.root}>
    <div id="nav-link">
      <ul className={styles.link}>
        <li className={styles.link__item}>
          <a href="#rsvp">RSVP</a>
        </li>
        <li className={styles.link__item}>
          <a href="#event">SCHEDULE</a>
        </li>
        <li className={styles.link__item}>
          <a href="#place">PLACE</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

