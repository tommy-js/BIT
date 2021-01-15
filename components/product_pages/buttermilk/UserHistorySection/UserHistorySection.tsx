import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const UserHistorySection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2 className={styles.header}>User History</h2>
        <p className={styles.text}>
          We understand that a lot of the time when you find an interesting
          guide, story, or spot you'll be coming back to it in the future.
          Buttermilk is, at its core, a tool for the modern traveler. Keeping
          this is mind, we've designed a comprehensive history system for you to
          keep track of what you need.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.gif_container}>
          <img className={styles.gif} src={test} />
        </div>
      </div>
    </div>
  );
};
