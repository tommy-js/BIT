import React, { useState } from "react";
import { CrunchListTitle } from "../CrunchListTitle/CrunchListTitle";
import styles from "./styles.module.scss";

export const CrunchListContainer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.crunch_list_container}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_crunchlist.jpg")}
        />
      </div>
      <CrunchListTitle expanded={expanded} />
    </div>
  );
};
