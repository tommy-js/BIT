import React from "react";
import { Image } from "../../Image/Image";
import { Details } from "../../Details/Details";
import { Text } from "../../Text/Text";
import styles from "./styles.module.scss";

interface Props {
  data: any;
}

export const Update01Page: React.FC<Props> = (props) => {
  return (
    <div className={styles.update_01_page}>
      <Image imageURL={props.data.imageURL} />
      <Details
        title={props.data.title}
        timestamp={props.data.timestamp}
        version={props.data.version}
      />
      <Text text={props.data.text} />
    </div>
  );
};
