import React from "react";

interface Props {
  name: string;
  description: string;
}

export const TeamMember: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};
