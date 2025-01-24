import React from "react";
import { Button } from "../ui/button";

const CategoryButton = () => {
  const btnData = [
    {
      id: "1",
      variant: "outline",
      btnText: "Clothes & Shoes",
      styles: "border border-black rounded-xl",
    },
    {
      id: "2",
      variant: "",
      btnText: "Electronics",
      styles: "rounded-xl",
    },
    {
      id: "3",
      variant: "outline",
      btnText: "Sports goods",
      styles: "border border-black rounded-xl",
    },
    {
      id: "4",
      variant: "outline",
      btnText: "Children's Goods",
      styles: "border border-black rounded-xl",
    },
    {
      id: "5",
      variant: "outline",
      btnText: "Beauty",
      styles: "border border-black rounded-xl",
    },
    {
      id: "6",
      variant: "outline",
      btnText: "Furniture",
      styles: "border border-black rounded-xl",
    },
  ];
  return (
    <>
      {btnData.map(({ variant, btnText, styles }, index) => {
        return (
          <Button key={index} variant={variant} className={styles}>
            {btnText}
          </Button>
        );
      })}
    </>
  );
};

export default CategoryButton;
