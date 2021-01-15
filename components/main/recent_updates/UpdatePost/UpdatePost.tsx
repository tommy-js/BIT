import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  project: string;
  id: string;
  timestamp: number;
  title: string;
  subTitle: string;
  version: string;
  directory: string;
  imgUrl: string;
}

export const UpdatePost: React.FC<Props> = (props) => {
  return (
    <Link href={props.directory} passHref>
      <UpdateLink
        imgUrl={props.imgUrl}
        title={props.title}
        subTitle={props.subTitle}
        project={props.project}
        timestamp={props.timestamp}
        version={props.version}
      />
    </Link>
  );
};

const UpdateLink = React.forwardRef(
  (
    { onClick, href, imgUrl, title, subTitle, project, timestamp, version },
    ref
  ) => {
    const [textColor, setTextColor] = useState("black");

    useEffect(() => {
      if (project === "GreenStack") setTextColor("green");
      else if (project === "Buttermilk") setTextColor("orange");
    });

    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.update_post}>
          <div className={styles.image_container}>
            <img className={styles.image} src={imgUrl} />
          </div>
          <div className={styles.main}>
            <p className={styles.title}>{title}</p>
            <p className={styles.sub_title}>{subTitle}</p>
          </div>
          <div className={styles.info}>
            <p style={{ color: textColor }} className={styles.proj}>
              {project}
            </p>
            <p className={styles.timestamp}>Posted {timestamp}</p>
            <p className={styles.version_num}>Version: {version}</p>
          </div>
        </div>
      </a>
    );
  }
);
