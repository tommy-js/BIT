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
      name: "Tommy Benjamin",
      description:
        "Lead developer on GreenStack and CrunchList. Built BIT site.",
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
