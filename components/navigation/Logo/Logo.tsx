import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const logo = require("../../../public/logo.png");

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <HomeLink />
      </Link>
    </div>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div className={styles.img_container}>
        <img className={styles.img} src={logo} />
      </div>
      <p className={styles.title}>BIT</p>
    </a>
  );
});
