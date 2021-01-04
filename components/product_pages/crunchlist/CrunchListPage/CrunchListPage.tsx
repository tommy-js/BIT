import React from "react";
import { Title } from "../Title/Title";
import styles from "./styles.module.scss";

export const CrunchListPage: React.FC = () => {
  return (
    <div className={styles.crunchlist_page}>
      <Title />
    </div>
  );
};
