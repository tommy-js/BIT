import React, { useState } from "react";
import Link from "next/link";
import { ButtermilkTitle } from "../ButtermilkTitle/ButtermilkTitle";
import styles from "./styles.module.scss";

export const ButtermilkContainer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.buttermilk_container}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Link href="/updates/buttermilk/0.1" passHref>
        <ButtermilkLink expanded={expanded} />
      </Link>
    </div>
  );
};

const ButtermilkLink = React.forwardRef(({ onClick, href, expanded }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={require("../../../../public/test_greenstack.jpg")}
        />
      </div>
      <ButtermilkTitle expanded={expanded} />
    </a>
  );
});
