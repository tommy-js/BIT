import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  directory: string;
}

export const LearnMore: React.FC<Props> = (props) => {
  return (
    <Link href={`${props.directory}`}>
      <a className={styles.link}>Learn More</a>
    </Link>
  );
};
