import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  shortDesc: string;
  link: string;
}

export const ProductDescriptor: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.shortDesc}</p>
      <Link href={props.link}>
        <a className={styles.link}>Learn More</a>
      </Link>
    </div>
  );
};
