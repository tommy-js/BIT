import React, { useState } from "react";
import Link from "next/link";
import { GreenStackTitle } from "../GreenStackTitle/GreenStackTitle";
import styles from "./styles.module.scss";

export const GreenStackContainer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.green_stack_container}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Link href="/updates/greenstack/0.1" passHref>
        <GreenStackLink expanded={expanded} />
      </Link>
    </div>
  );
};

const GreenStackLink = React.forwardRef(({ onClick, href, expanded }, ref) => {
  return (
    <a className={styles.link} href={href} onClick={onClick} ref={ref}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_greenstack.jpg")}
        />
      </div>
      <GreenStackTitle expanded={expanded} />
    </a>
  );
});
