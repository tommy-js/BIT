import React from "react";
import { Image } from "../../Image/Image";
import { Details } from "../../Details/Details";
import { Runner } from "../../Runner/Runner";
import { Text } from "../../Text/Text";
import { Features } from "../../Features/Features";
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
        productInfo={props.data.productInfo}
      />
      <Text text={props.data.text[0]} />
      <Runner gif={props.data.gifs[0].gif} alt={props.data.gifs[0].alt} />
      <Text text={props.data.text[1]} />
      <Features features={props.data.features} />
    </div>
  );
};
