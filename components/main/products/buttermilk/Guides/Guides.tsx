import React from "react";
import styles from "./styles.module.scss";

const test = require("../../../../../public/test_gif.gif");

export const Guides: React.FC = () => {
  return (
    <div className={styles.guides}>
      <div className={styles.left}>
        <h3 className={styles.header}>Guides</h3>
        <p className={styles.text}>
          Have some unique insight or knowledge to share? Add it to Buttermilk
          and help others to better enjoy whatever it is you do; from hiking and
          backpacking to sailing, rock climbing, fishing, and more. On the other
          end, if you're looking to improve your knowledge or just see what
          others have to say, reading through guides is a great way to do it.
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
