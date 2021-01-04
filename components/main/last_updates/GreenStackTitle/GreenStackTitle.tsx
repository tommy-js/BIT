import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  expanded: boolean;
}

export const GreenStackTitle: React.FC<Props> = (props) => {
  const [height, setHeight] = useState("40px");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (props.expanded === true) {
      setHeight("100px");
      setBackgroundColor("white");
      setColor("black");
    } else {
      setHeight("40px");
      setBackgroundColor("transparent");
      setColor("white");
    }
  }, [props.expanded]);

  return (
    <div
      style={{ height, backgroundColor }}
      className={styles.green_stack_title}
    >
      <div className={styles.title_container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src={require("../../../../public/greenstack_logo.png")}
          />
        </div>
        <p style={{ color }} className={styles.title}>
          GreenStack
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>First update</p>
      </div>
    </div>
  );
};
