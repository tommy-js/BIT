import React from "react";
import { Stories } from "../buttermilk/Stories/Stories";
import { Guides } from "../buttermilk/Guides/Guides";
import { Spots } from "../buttermilk/Spots/Spots";
import { LearnMore } from "../LearnMore/LearnMore";
import styles from "./styles.module.scss";

export const ButtermilkDescriptor: React.FC = () => {
  return (
    <div className={styles.buttermilk_descriptor}>
      <h3 className={styles.header}>About Buttermilk</h3>
      <p className={styles.brief}>
        Buttermilk is a webapp developed specifically for rock climbers, but
        with every type of adventurer in mind. It aims to provide a place for
        those interested in the Great Outdoors to come together and discuss
        their hobbies, read and write guides and memoirs, and keep track of the
        best places to participate.
      </p>
      <Stories />
      <Guides />
      <Spots />
      <LearnMore directory="/products/buttermilk" />
    </div>
  );
};
