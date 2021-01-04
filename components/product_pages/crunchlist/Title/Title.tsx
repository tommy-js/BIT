import React from "react";
import styles from "./styles.module.scss";
const logo = require("../../../../public/crunchlist_logo.png");

export const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.title_container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={logo} />
        </div>
        <p className={styles.text}>CrunchList</p>
        <p className={styles.subtext}>Push your productivity</p>
      </div>
    </div>
  );
};
