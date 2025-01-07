import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";
import { ClipLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "@/store/productSlice";

const ProductSection = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const { data, isLoading, isSuccess, isError } = useGetAllProductsQuery();

  let content;
  if (isLoading) {
    content = (
      <ClipLoader size={30} aria-label="Loading Spinner" data-testid="loader" />
    );
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
    <div
      className={`${isLoading ? "flex items-center justify-center" : "grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-10"}`}
    >
      {content}
    </div>
  );
};

export default ProductSection;
