import React from "react";
import styles from "./styles.module.scss";

interface Props {
  gif: string;
  alt: string;
}

export const Runner: React.FC<Props> = (props) => {
  return (
    <div className={styles.runner}>
      <img className={styles.runner_img} src={props.gif} alt={props.alt} />
    </div>
  );
};
