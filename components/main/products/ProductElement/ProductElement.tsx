import React from "react";
import styles from "./styles.module.scss";

interface Props {
  img: string;
  title: string;
  color: string;
  id: number;
  modDisplay: (id: number) => void;
}

export const ProductElement: React.FC<Props> = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={styles.product_element}
      onClick={() => props.modDisplay(props.id)}
    >
      <div className={styles.img_block}>
        <img src={props.img} className={styles.img} />
      </div>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
};
