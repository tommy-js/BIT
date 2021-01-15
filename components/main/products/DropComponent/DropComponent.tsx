import React from "react";
import styles from "./styles.module.scss";

interface Props {
  header: string;
  text: string;
  image: string;
}

export const DropComponent: React.FC<Props> = (props) => {
  return (
    <div className={styles.drop_component}>
      <div className={styles.left}>
        <h3 className={styles.header}>{props.header}</h3>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.img_block}>
          <img className={styles.img} src={props.image} />
        </div>
      </div>
    </div>
  );
};
