import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const FeedSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2 className={styles.header}>Feed</h2>
        <p className={styles.text}>
          Buttermilk is designed to allow the user to scroll through pages of
          results quickly and easily. This lets them parse through the best and
          most accurate results. However, the site is also equipped with a
          powerful search engine, which is useful when the user is looking for
          locations, styles of climbing, or a unique niche.
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
