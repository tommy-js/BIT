import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  expanded: boolean;
}

export const ButtermilkTitle: React.FC<Props> = (props) => {
  const [height, setHeight] = useState("50px");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [color, setColor] = useState("white");
  const [versionColor, setVersionColor] = useState("transparent");

  useEffect(() => {
    if (props.expanded === true) {
      setHeight("100px");
      setBackgroundColor("white");
      setColor("black");
      setVersionColor("black");
    } else {
      setHeight("50px");
      setBackgroundColor("transparent");
      setColor("white");
      setVersionColor("transparent");
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
            src={require("../../../../public/buttermilk_logo.png")}
          />
        </div>
        <p style={{ color }} className={styles.title}>
          Buttermilk{" "}
          <span style={{ color: versionColor }} className={styles.version_num}>
            [Version 0.1]
          </span>
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>First update</p>
      </div>
      <div className={styles.modal}></div>
    </div>
  );
};
