import React from "react";

interface Props {
  title: string;
  shortDesc: string;
}

export const ProductDescriptor: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.shortDesc}</p>
    </div>
  );
};
