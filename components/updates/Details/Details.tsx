import React from "react";
import Link from "next/link";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

type ProductInfo = {
  product: string;
  productLink: string;
  icon: string;
};

interface Props {
  title: string;
  timestamp: number;
  version: string;
  productInfo: ProductInfo;
}

export const Details: React.FC<Props> = (props) => {
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.timestamp}>{returnDate(props.timestamp)}</p>
      <p className={styles.version}>Version: {props.version}</p>
      <Link href={`${props.productInfo.productLink}`} passHref>
        <ProductLink
          icon={props.productInfo.icon}
          product={props.productInfo.product}
        />
      </Link>
    </div>
  );
};

const ProductLink = React.forwardRef(
  ({ onClick, href, icon, product }, ref) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.product}>
          <div className={styles.left}>
            <div className={styles.image_block}>
              <img className={styles.icon} src={icon} />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.text}>{product}</p>
          </div>
        </div>
      </a>
    );
  }
);
