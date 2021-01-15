import React from "react";
import { UpdatePost } from "../UpdatePost/UpdatePost";
import styles from "./styles.module.scss";

const test = require("../../../../public/test_gif.gif");

type Update = {
  project: string;
  id: string;
  timestamp: number;
  title: string;
  subTitle: string;
  version: string;
  directory: string;
  imgUrl: string;
};

export const UpdateBody: React.FC = () => {
  const updates = [
    {
      project: "GreenStack",
      id: "29b09160-621e-42ed-87f4-043657a9bcb9",
      timestamp: 1610741178,
      title: "First Update",
      subTitle: "Feed, development notification, etc...",
      version: "0.1",
      directory: "/updates/greenstack/0.1",
      imgUrl: test,
    },
    {
      project: "Buttermilk",
      id: "cc35f45a-4009-4c77-aace-d81c43b5c64d",
      timestamp: 1610741178,
      title: "Initial Update",
      subTitle: "Stories, guides, spots, etc...",
      version: "0.1",
      directory: "/updates/buttermilk/0.1",
      imgUrl: test,
    },
  ];

  return (
    <div className={styles.update_body}>
      {updates.map((el: Update) => (
        <UpdatePost {...el} />
      ))}
    </div>
  );
};
