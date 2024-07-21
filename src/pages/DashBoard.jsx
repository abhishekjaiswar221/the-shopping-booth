import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductsDashboard = () => {
  return (
    <div className="p-5 lg:px-28">
      {/* <h2 className="text-3xl font-semibold tracking-tight text-center py-1x0 scroll-m-20 first:mt-0">
        Product Dashboard
      </h2> */}
      <ProductCard />
    </div>
  );
};

export default ProductsDashboard;
