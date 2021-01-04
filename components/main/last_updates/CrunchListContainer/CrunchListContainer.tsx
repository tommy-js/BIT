import React, { useState } from "react";
import Link from "next/link";
import { CrunchListTitle } from "../CrunchListTitle/CrunchListTitle";
import styles from "./styles.module.scss";

export const CrunchListContainer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.crunch_list_container}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Link href="/updates/crunchlist/0.1" passHref>
        <CrunchListLink expanded={expanded} />
      </Link>
    </div>
  );
};

const CrunchListLink = React.forwardRef(({ onClick, href, expanded }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_crunchlist.jpg")}
        />
      </div>
      <CrunchListTitle expanded={expanded} />
    </a>
  );
});
