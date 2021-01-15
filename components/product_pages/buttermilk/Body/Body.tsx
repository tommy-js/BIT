import React from "react";
import styles from "./styles.module.scss";

export const Body: React.FC = () => {
  return (
    <div className={styles.body}>
      <FeedSection />
      <UserUploadedSection />
      <UserHistorySection />
      <FollowerSection />
      <UserFollowFeed />
      <VideoUpload />
    </div>
  );
};
