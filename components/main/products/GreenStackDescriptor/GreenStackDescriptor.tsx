import React from "react";
import { DropComponent } from "../DropComponent/DropComponent";
import { LearnMore } from "../LearnMore/LearnMore";
import styles from "./styles.module.scss";

const test = require("../../../../public/test_gif.gif");

export const GreenStackDescriptor: React.FC = () => {
  return (
    <div className={styles.greenstack_descriptor}>
      <h3 className={styles.header}>About GreenStack</h3>
      <p className={styles.brief}>
        GreenStack is being developed to solve a specific issue: there is a
        distinct lack of good websites for beginners to learn about the stock
        market and to get involved.
      </p>
      <DropComponent
        header="Feed"
        text="No social platform would be complete without an easy way to interact with others. Follow others and add stocks to your owned and watchlist to get real-time updates on everything you care about."
        image={test}
      />
      <DropComponent
        header="Tutorial System"
        text="Aiming to provide easily accessible and interesting tutorials on everything stock market, GreenStack has a great, highly interactive interface for learning. Have somehing pressing to attend to? Answer checkpoint questions to save your progress so you can pick up where you left off later."
        image={test}
      />
      <DropComponent
        header="Portfolio"
        text="GreenStack has a great portfolio system, which allows you to keep track of both your owned stocks and those you're simply keeping an eye on. Within the portfolio analysis section you can see a detailed breakdown of your diversification, market trends, and ratings for each stock you own."
        image={test}
      />
      <LearnMore directory="/products/greenstack" />
    </div>
  );
};
