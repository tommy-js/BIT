import React from "react";
import { Title } from "../Title/Title";
import { Header } from "../Header/Header";
import { Body } from "../Body/Body";
import styles from "./styles.module.scss";

export const ButtermilkPage: React.FC = () => {
  return (
    <div className={styles.crunchlist_page}>
      <Title />
      <Header />
      <Body />
    </div>
  );
};
