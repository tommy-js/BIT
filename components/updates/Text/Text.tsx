import React from "react";
import styles from "./styles.module.scss";

type Text = {
  id: number;
  val: string;
};

interface Props {
  text: Text[];
}

export const Text: React.FC<Props> = (props) => {
  return (
    <p className={styles.text}>
      {props.text.map((el: any) => (
        <p key={el.id}>{el.val}</p>
      ))}
    </p>
  );
};
