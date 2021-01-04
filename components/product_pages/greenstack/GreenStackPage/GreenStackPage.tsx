import React from "react";
import { Title } from "../Title/Title";
import styles from "./styles.module.scss";

export const GreenStackPage: React.FC = () => {
  return (
    <div className={styles.greenstack_page}>
      <Title />
    </div>
  );
};
