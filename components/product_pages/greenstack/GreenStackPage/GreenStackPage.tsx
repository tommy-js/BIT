import React from "react";
import { Title } from "../Title/Title";
import { Header } from "../Header/Header";
import { PostFeedSection } from "../PostFeedSection/PostFeedSection";
import { TutorialSystemSection } from "../TutorialSystemSection/TutorialSystemSection";
import { StockIndexSection } from "../StockIndexSection/StockIndexSection";
import { ImageUploadSection } from "../ImageUploadSection/ImageUploadSection";
import { UserTaggingSection } from "../UserTaggingSection/UserTaggingSection";
import { UserPortfolioSection } from "../UserPortfolioSection/UserPortfolioSection";
import styles from "./styles.module.scss";

export const GreenStackPage: React.FC = () => {
  return (
    <div className={styles.greenstack_page}>
      <Title />
      <Header />
      <PostFeedSection />
      <TutorialSystemSection />
      <StockIndexSection />
      <ImageUploadSection />
      <UserTaggingSection />
      <UserPortfolioSection />
    </div>
  );
};
