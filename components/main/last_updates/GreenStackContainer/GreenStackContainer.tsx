import React, { useState } from "react";
import { GreenStackTitle } from "../GreenStackTitle/GreenStackTitle";
import styles from "./styles.module.scss";

export const GreenStackContainer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.green_stack_container}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_greenstack.jpg")}
        />
      </div>
      <GreenStackTitle expanded={expanded} />
    </div>
  );
};
