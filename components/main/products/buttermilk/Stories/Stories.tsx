import React from "react";
import styles from "./styles.module.scss";

const test = require("../../../../../public/test_gif.gif");

export const Stories: React.FC = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.left}>
        <h3 className={styles.header}>Stories</h3>
        <p className={styles.text}>
          Read about the adventures of the Buttermilk community. Have something
          to contribute yourself? Write to your audience and inspire those who
          also participate in your chosen activity.
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
