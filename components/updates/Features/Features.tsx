import React from "react";
import styles from "./styles.module.scss";

type Feature = {
  id: number;
  val: string;
};

interface Props {
  features: Feature[];
}

export const Features: React.FC<Props> = (props) => {
  return (
    <div className={styles.features}>
      <h2 className={styles.header}>Features</h2>
      <ul>
        {props.features.map((el: Feature) => (
          <li className={styles.item} key={el.id}>
            {el.val}
          </li>
        ))}
      </ul>
    </div>
  );
};
