import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const UserPortfolioSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>User Portfolio</h2>
        <p className={styles.text}>
          The user portfolio is one of GreenStack's best features. Use it to
          keep an eye on both your owned and watched stocks, and get an in-depth
          analysis of your portfolio.
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
