import React from "react";
import { GreenStackContainer } from "../GreenStackContainer/GreenStackContainer";
import { CrunchListContainer } from "../CrunchListContainer/CrunchListContainer";
import styles from "./styles.module.scss";

export const UpdateContainer: React.FC = () => {
  return (
    <div className={styles.update_container}>
      <GreenStackContainer />
      <CrunchListContainer />
    </div>
  );
};
