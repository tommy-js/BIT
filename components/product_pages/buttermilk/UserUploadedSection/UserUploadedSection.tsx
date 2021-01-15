import React from "react";
import styles from "./styles.module.scss";
const test = require("../../../../public/test_gif.gif");

export const UserUploadedSection: React.FC = () => {
  return (
    <div className={styles.feed_section}>
      <div className={styles.left}>
        <h2>User Content</h2>
        <p className={styles.text}>
          We believe the best ideas come from you; those who venture out into
          the unknown. For that reason, we've designed Buttermilk to be composed
          entirely of user-curated content. Of course, being climbers ourselves,
          we'll be uploading our own stories, spots, and guides once Buttermilk
          is officially live.
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
