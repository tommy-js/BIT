import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const PostFeedSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>Post Feed</h2>
        <p className={styles.text}>
          GreenStack is built to be collaborative and entertaining. The feed
          system we've built is designed for the purpose of always keeping new
          information flowing, and to give you the most up-to-date news on all
          your stocks.
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
