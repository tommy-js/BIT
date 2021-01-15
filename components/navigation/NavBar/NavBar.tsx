import React from "react";
import { Logo } from "../Logo/Logo";
import { LinkTo } from "../LinkTo/LinkTo";
import styles from "./styles.module.scss";

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <LinkTo directory="/about" text="About" />
    </div>
  );
};
