import React from "react";
import styles from "./styles.module.scss";

export const CrunchListContainer: React.FC = () => {
  return (
    <div className={styles.crunch_list_container}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_crunchlist.jpg")}
        />
      </div>
      <p>CrunchList</p>
    </div>
  );
};
