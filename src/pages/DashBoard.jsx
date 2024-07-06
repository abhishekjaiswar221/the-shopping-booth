import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductsDashboard = () => {
  return (
    <div className="p-10">
      <h2 className="py-10 text-3xl font-semibold tracking-tight text-center scroll-m-20 first:mt-0">
        Product Dashboard
      </h2>
      <ProductCard />
    </div>
  );
};

export default ProductsDashboard;
