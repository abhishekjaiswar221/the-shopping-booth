import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";
import ProductCard from "./ProductCard";
import { useGetHomeDecorProductsQuery } from "@/store/productSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const { data, isLoading, isSuccess, isError } =
    useGetHomeDecorProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { products } = data;
    content = products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        addToCart={addToCart}
        btnText={"Add to Cart"}
        property={"add"}
      />
    ));
  } else if (isError) {
    content = <p>Something went wrong! Try again later</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-5 md:flex md:flex-row md:flex-wrap">
      {content}
    </div>
  );
};

export default HeroSection;
