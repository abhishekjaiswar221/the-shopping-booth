// import React, { useEffect } from "react";
// import { Button } from "../ui/button";
// import StatusCode from "@/utils/StatusCode";
// import { getHeroProducts } from "@/store/heroSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Card, CardContent } from "@/components/ui/card";

// const HeroSection = () => {
//   const dispatch = useDispatch();
//   const { data: heroProducts, status } = useSelector(
//     (state) => state.heroProducts
//   );

//   // Call fetchData on component mount
//   useEffect(() => {
//     //Dispatch an action for fetchProducts
//     dispatch(getHeroProducts());
//   }, []);

//   if (status === StatusCode.LOADING) {
//     return <p>Loading...</p>;
//   }

//   if (status === StatusCode.ERROR) {
//     return <p>Something went wrong! Try agin later</p>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
//       {heroProducts.map((product) => (
//         <Card
//           key={product.id}
//           className="max-w-sm overflow-hidden transition-all duration-500 transform rounded-lg border-none shadow-md w-[335px] lg:h-[425px] lg:w-72 hover:scale-105"
//         >
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="object-cover w-full bg-gray-100 rounded-lg h-72"
//           />
//           <CardContent className="p-4 space-y-2">
//             <div className="space-y-2">
//               <h3 className="text-base font-semibold">
//                 {product.title.slice(0, 26)}
//               </h3>
//               <p className="text-muted-foreground">
//                 {product.description.slice(0, 20) + "..."}
//               </p>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-xl font-bold">${product.price}</span>
//               <Button>Add to Cart</Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;

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
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ));
  } else if (isError) {
    content = <p>Something went wrong! Try again later</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
      {content}
    </div>
  );
};

export default HeroSection;
