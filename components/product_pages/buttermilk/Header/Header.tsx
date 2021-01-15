import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>A Site For The Modern Adventurer</h1>
      <p className={styles.text}>
        In 2021 I decided that I wanted to build a beautiful, intuitive, and
        accessible website for both the serious trailblazer and weekend-warrior
        alike. As an avid boulderer, I've long been disappointed with the lack
        of well-engineered websites that fit my needs. Couple this with a
        general lacking of space for climbers to get together online and
        discuss, and I was feeling that this was a niche that needed to be
        filled.
      </p>
      <h2 className={styles.subtitle}>Features</h2>
      <p className={styles.text}>
        Even though the site is designed for use by anyone with an interest in
        travel and adventure, its primary focus is on the sport of
        rock-climbing. Some of its more notable features include:
      </p>
      <ul>
        <li>Discrete sections and feeds for Stories, Guides and Spots.</li>
        <li>User uploaded Stories, Guides and Spots.</li>
        <li>User history which keeps track of likes and posts.</li>
        <li>Follows and followers.</li>
        <li>
          A feed for all user follows, so they can stay up to date with new
          posts.
        </li>
        <li>Image and video upload.</li>
      </ul>
    </div>
  );
};
