import React from "react";
import styles from "./styles.module.scss";
const logo = require("../../../../public/buttermilk_logo.png");

export const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.title_container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={logo} />
        </div>
        <p className={styles.text}>Buttermilk</p>
        <p className={styles.subtext}>Share your adventures!</p>
      </div>
    </div>
  );
};
