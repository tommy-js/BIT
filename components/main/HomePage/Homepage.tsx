import React from "react";
import { UpdateContainer } from "../last_updates/UpdateContainer/UpdateContainer";
import { RecentUpdates } from "../recent_updates/RecentUpdates/RecentUpdates";
import { Products } from "../products/Products/Products";
import styles from "./styles.module.scss";

export const Homepage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <UpdateContainer />
      <RecentUpdates />
      <Products />
    </div>
  );
};
