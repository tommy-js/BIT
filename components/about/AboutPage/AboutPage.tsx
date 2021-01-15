import React from "react";
import styles from "./styles.module.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.about_page}>
      <h1 className={styles.header}>About</h1>
      <p className={styles.text}>
        BIT is a portfolio designed to show off two projects: GreenStack and
        Buttermilk. Both of these projects posed different challenges, and
        required different methods to develop them. For GreenStack, there was
        the difficulty of building a fully-interactive user feed, which would
        allow the user to receive both stock news and posts from users they
        follow in real time. There was the additional problem of needing to
        develop a solution for stock-chart rendering. Since I could not find a
        package that would solve this problem for me, I was resolved to building
        it myself in pure JavaScript. Combine this with the need for a dynamic
        tutorial system, and it was quite a challenging project to construct.
      </p>
      <p className={styles.text}>
        Buttermilk, in comparison, was built to solve a very different problem
        with the same technology stack. While Buttermilk is simpler in that it
        does not require the complexities of building stock charts or having a
        dynamic user feed, it has its own difficulties in video-hosting and a
        larger amount of image and gif upload. Additionally, I anticipate that
        future versions will include maps so the user can get location data
        about spots, guides, and stories. This is likely to make it rival the
        complexity of GreenStack.
      </p>
      <h2 className={styles.subheader}>About The Developer</h2>
      <p className={styles.text}>
        My name is Tyler Blovat. I'm a frontend developer from New York who is
        interested primarily in dynamic websites. I'd love to help build webapps
        for our future, more connected world. Both of my large projects posted
        here sought to solve real problems within niche communities, and I hope
        to do more of this going forward. I primarily use the MERN stack,
        although I'd love to learn other technologies!
      </p>
    </div>
  );
};
