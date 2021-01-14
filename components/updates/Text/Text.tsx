import React from "react";
import styles from "./styles.module.scss";

type Text = {
  id: number;
  val: string;
};

interface Props {
  text: Text;
}

export const Text: React.FC<Props> = (props) => {
  return (
    <p className={styles.text}>
      <p key={props.text.id}>{props.text.val}</p>
    </p>
  );
};
