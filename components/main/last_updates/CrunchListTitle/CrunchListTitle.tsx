import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  expanded: boolean;
}

export const CrunchListTitle: React.FC<Props> = (props) => {
  const [height, setHeight] = useState("50px");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (props.expanded === true) {
      setHeight("100px");
      setBackgroundColor("white");
      setColor("black");
    } else {
      setHeight("50px");
      setBackgroundColor("transparent");
      setColor("white");
    }
  }, [props.expanded]);

  return (
    <div
      style={{ height, backgroundColor }}
      className={styles.crunch_list_title}
    >
      <div className={styles.title_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src={require("../../../../public/crunchlist_logo.png")}
          />
        </div>
        <p style={{ color }} className={styles.title}>
          CrunchList
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>First update</p>
      </div>
      <div className={styles.modal}></div>
    </div>
  );
};
