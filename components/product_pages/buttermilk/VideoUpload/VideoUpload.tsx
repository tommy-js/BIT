import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const VideoUpload: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>Video and Images</h2>
        <p className={styles.text}>
          Video and images are essential tools for today's story-tellers. Upload
          your new videos and pictures to Buttermilk and have it get seen by
          your followers in no time. On the other end, enjoy curated video
          content by your favorite creators!
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
