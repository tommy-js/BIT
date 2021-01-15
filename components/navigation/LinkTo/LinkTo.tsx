import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  directory: string;
  text: string;
}

export const LinkTo: React.FC<Props> = (props) => {
  return (
    <Link href={`${props.directory}`}>
      <a className={styles.link_to}>{props.text}</a>
    </Link>
  );
};
