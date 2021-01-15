import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>For The Trader in All of Us</h1>
      <p className={styles.text}>
        GreenStack is a site I decided to build upon noting that there weren't
        any good sites out there for beginning stock traders to learn how
        everything worked. This website is designed to give new investors an
        easy introduction to the space, and to help foster a community that can
        learn from one another.
      </p>
      <h2 className={styles.subtitle}>Features</h2>
      <p className={styles.text}>
        While GreenStack is primarily aimed towards new traders, it is by no
        means exclusive to them. There is a large focus placed on ensuring that
        traders new and old can extract value from the app, and in fact it will
        serve different purposes for different people. Some of the most notable
        features include:
      </p>
      <ul>
        <li>
          A user post feed with stock news and market updates, along with posts
          and comments from accounts you follow.
        </li>
        <li>
          A detailed, interactive tutorial system which records user progress.
        </li>
        <li>A highly searchable stock index.</li>
        <li>
          A user portfolio which allows you to keep track of your investments in
          real time.
        </li>
        <li>Image and gif uploading through posts and comments.</li>
        <li>User tagging and notification system.</li>
      </ul>
    </div>
  );
};
