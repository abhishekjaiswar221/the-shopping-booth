import React from "react";
import { useGetAllProductsQuery } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";
import ProductCard from "./ProductCard";
import { ClipLoader } from "react-spinners";

const ProductSection = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const { data, isLoading, isSuccess, isError } = useGetAllProductsQuery();

  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center justify-center w-full h-full">
        <ClipLoader
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
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
    <div className="flex flex-col items-center justify-between gap-12 md:gap-8 md:flex md:flex-row md:flex-wrap lg:gap-6">
      {content}
    </div>
  );
};

export default ProductSection;
