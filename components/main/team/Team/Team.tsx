import React from "react";
import { TeamMember } from "../TeamMember/TeamMember";
import styles from "./styles.module.scss";

type Member = {
  name: string;
  description: string;
};

export const Team: React.FC = () => {
  const members = [
    {
      name: "Tyler Blovat",
      description:
        "Developer for GreenStack, Buttermilk and BIT. I became interested in web development in 2020 when I was in college. Since then I've built many small projects and spent a lot of time improving my skills. While I am primarily a React developer, I'm interested in all technologies, and am always learning more.",
    },
  ];

  return (
    <div className={styles.team}>
      {members.map((el: Member) => (
        <TeamMember name={el.name} description={el.description} />
      ))}
    </div>
  );
};
