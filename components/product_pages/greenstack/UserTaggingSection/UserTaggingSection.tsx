import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const UserTaggingSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>User Tagging</h2>
        <p className={styles.text}>
          Because no social platform would be complete without user interaction,
          we've built a tagging and notification system that makes it trivial to
          get someone's attention.
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
