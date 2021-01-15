import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const UserFollowFeed: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>User Follower Feed</h2>
        <p className={styles.text}>
          Follow your favorite climbers, sailors, and runners and get their most
          recent content delivered right to you with the follower feed. This
          makes it trivial to consume only the content you're most interested
          in, and to stay up to date with their exciting lives.
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
