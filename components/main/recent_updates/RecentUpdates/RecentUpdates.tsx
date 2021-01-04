import React from "react";
import { UpdateHeader } from "../UpdateHeader/UpdateHeader";
import { UpdateBody } from "../UpdateBody/UpdateBody";
import styles from "./styles.module.scss";

export const RecentUpdates: React.FC = () => {
  return (
    <div className={styles.recent_updates}>
      <UpdateHeader />
      <UpdateBody />
    </div>
  );
};
