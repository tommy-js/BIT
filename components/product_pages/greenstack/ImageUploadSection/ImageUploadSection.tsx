import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const ImageUploadSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2 className={styles.header}>User Content</h2>
        <p className={styles.text}>
          Of course, no post or comment would be complete without user
          interaction in the form of images and video, which is why we've built
          a comprehensive system for uploading the content you like: from charts
          to memes.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.gif_container}>
          <img className={styles.gif} src={test} />
        </div>
      </div>
    </div>
  );
};
