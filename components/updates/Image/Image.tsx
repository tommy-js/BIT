import React from "react";
import styles from "./styles.module.scss";

interface Props {
  imageURL: string;
}

export const Image: React.FC<Props> = (props) => {
  return (
    <div className={styles.image_block}>
      <img className={styles.image} src={props.imageURL} />
      <div className={styles.flair}></div>
    </div>
  );
};
