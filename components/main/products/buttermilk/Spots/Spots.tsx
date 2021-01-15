import React from "react";
import styles from "./styles.module.scss";

const test = require("../../../../../public/test_gif.gif");

export const Spots: React.FC = () => {
  return (
    <div className={styles.spots}>
      <div className={styles.left}>
        <h3 className={styles.header}>Spots</h3>
        <p className={styles.text}>
          Search through locations to take part in your favorite activities.
          Upload your own to contribute to the sport. This feature, primarily
          designed for rock climbing, allows you to more easily participate, and
          can be used to find new hobbies and interests.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.img_block}>
          <img className={styles.img} src={test} />
        </div>
      </div>
    </div>
  );
};
