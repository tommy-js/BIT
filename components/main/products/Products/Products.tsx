import React, { useState, useEffect } from "react";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { ProductElement } from "../ProductElement/ProductElement";
import { ProductDescriptor } from "../ProductDescriptor/ProductDescriptor";
import styles from "./styles.module.scss";
const greenstack_logo = require("../../../../public/greenstack_logo.png");
const crunchlist_logo = require("../../../../public/crunchlist_logo.png");

type Product = {
  img: string;
  title: string;
  shortDesc: string;
};

export const Products: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState("GreenStack");
  const [desc, setDesc] = useState(
    "A social network and education platform centered around the stock market."
  );

  useEffect(() => {
    setTitle(products[selected].title);
    setDesc(products[selected].shortDesc);
  }, [selected]);

  const products = [
    {
      img: greenstack_logo,
      title: "GreenStack",
      shortDesc:
        "A social network and education platform centered around the stock market.",
      color: "green",
      id: 0,
    },
    {
      img: crunchlist_logo,
      title: "CrunchList",
      shortDesc:
        "Productivity platform built to help the user maximize their time utilization.",
      color: "red",
      id: 1,
    },
  ];

  function modDisplay(id: number) {
    setSelected(id);
  }

  return (
    <div className={styles.products}>
      <ProductTitle />
      <div className={styles.product_items}>
        {products.map((el: Product) => (
          <ProductElement
            img={el.img}
            title={el.title}
            color={el.color}
            id={el.id}
            modDisplay={modDisplay}
          />
        ))}
      </div>
      <ProductDescriptor title={title} shortDesc={desc} />
    </div>
  );
};
