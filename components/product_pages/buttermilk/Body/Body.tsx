import React from "react";
import { FeedSection } from "../FeedSection/FeedSection";
import { UserUploadedSection } from "../UserUploadedSection/UserUploadedSection";
import { UserHistorySection } from "../UserHistorySection/UserHistorySection";
import { FollowerSection } from "../FollowerSection/FollowerSection";
import { UserFollowFeed } from "../UserFollowFeed/UserFollowFeed";
import { VideoUpload } from "../VideoUpload/VideoUpload";
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
