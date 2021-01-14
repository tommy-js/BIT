import React from "react";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  timestamp: number;
  version: string;
}

export const Details: React.FC<Props> = (props) => {
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.timestamp}>{returnDate(props.timestamp)}</p>
      <p className={styles.version}>Version: {props.version}</p>
    </div>
  );
};
