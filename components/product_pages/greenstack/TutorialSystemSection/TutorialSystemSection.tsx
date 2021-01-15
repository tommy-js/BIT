import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const TutorialSystemSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2 className={styles.header}>Tutorial System</h2>
        <p className={styles.text}>
          To be blunt, learning about the stock market is often boring. It's a
          bunch of charts and uninteresting terms, and learning about it can
          often feel like reading a textbook. One of the main purposes of
          GreenStack is to provide a tutorial system that makes learning about
          stocks fun and interesting.
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
