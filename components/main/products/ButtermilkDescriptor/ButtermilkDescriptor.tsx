import React from "react";
import { Guides } from "../buttermilk/Guides/Guides";
import { Spots } from "../buttermilk/Spots/Spots";
import { DropComponent } from "../DropComponent/DropComponent";
import { LearnMore } from "../LearnMore/LearnMore";
import styles from "./styles.module.scss";

const test = require("../../../../public/test_gif.gif");

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
      <DropComponent
        header="Stories"
        text="Read about the adventures of the Buttermilk community. Have something to contribute yourself? Write to your audience and inspire those who also participate in your chosen activity."
        image={test}
      />
      <DropComponent
        header="Guides"
        text="Have some unique insight or knowledge to share? Add it to Buttermilk and help others to better enjoy whatever it is you do; from hiking and backpacking to sailing, rock climbing, fishing, and more. On the other end, if you're looking to improve your knowledge or just see what others have to say, reading through guides is a great way to do it."
        image={test}
      />
      <DropComponent
        header="Spots"
        text="Search through locations to take part in your favorite activities. Upload your own to contribute to the sport. This feature, primarily designed for rock climbing, allows you to more easily participate, and can be used to find new hobbies and interests."
        image={test}
      />
      <LearnMore directory="/products/buttermilk" />
    </div>
  );
};
