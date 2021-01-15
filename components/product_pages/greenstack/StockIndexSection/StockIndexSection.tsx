import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const StockIndexSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>Stock Index</h2>
        <p className={styles.text}>
          Without a doubt one of our best features is the highly-searchable
          index we've constructed to give you a better way to find new companies
          to invest in. If you own these companies you can add them, alongside
          the number of shares you own, to the user portfolio. Of course, if you
          don't own these companies but want to keep an eye on them, you can
          simply add them to your watchlist. After doing so, you'll receive live
          updates on the companies straight to your feed.
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
