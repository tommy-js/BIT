import React from "react";
import { GreenStackContainer } from "../GreenStackContainer/GreenStackContainer";
import { ButtermilkContainer } from "../ButtermilkContainer/ButtermilkContainer";
import styles from "./styles.module.scss";

export const UpdateContainer: React.FC = () => {
  return (
    <div className={styles.update_container}>
      <GreenStackContainer />
      <ButtermilkContainer />
    </div>
  );
};
