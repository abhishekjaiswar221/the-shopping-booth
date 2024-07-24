import React from "react";
import ProductCard from "@/components/component/ProductCard";
// import HeroSection from "@/components/component/HeroSection";

const ProductsDashboard = () => {
  return (
    <div className="p-5 lg:px-10">
      {/* <h2 className="text-3xl font-semibold tracking-tight text-center py-1x0 scroll-m-20 first:mt-0">
        Product Dashboard
      </h2> */}
      {/* <HeroSection /> */}
      <ProductCard />
    </div>
  );
};

export default ProductsDashboard;
