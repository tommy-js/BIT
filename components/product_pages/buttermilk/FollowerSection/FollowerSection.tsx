import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const FollowerSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>Follower</h2>
        <p className={styles.text}>
          Buttermilk is designed to be collaborative; to help you take advantage
          of this beautiful, broad world we all share. Follow others who inspire
          you and serve as inspiration for others with our detailed community
          system.
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
