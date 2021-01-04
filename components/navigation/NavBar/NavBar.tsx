import React from "react";
import { Logo } from "../Logo/Logo";
import styles from "./styles.module.scss";

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
};
