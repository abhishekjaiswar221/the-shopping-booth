// // import HeroSection from "@/components/component/HeroSection";
// import HeroCard from "@/components/component/HeroCard";
// import ProductCard from "@/components/component/ProductCard";
// import { add } from "@/store/cartSlice";
// import { getProducts } from "@/store/productSlice";
// import StatusCode from "@/utils/StatusCode";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { data: products, status } = useSelector((state) => state.products);

//   // Call fetchData on component mount
//   useEffect(() => {
//     //Dispatch an action for fetchProducts
//     dispatch(getProducts());
//   }, []);

//   if (status === StatusCode.LOADING) {
//     return <p>Loading...</p>;
//   }

//   if (status === StatusCode.ERROR) {
//     return <p>Something went wrong! Try agin later</p>;
//   }

//   const addToCart = (product) => {
//     dispatch(add(product));
//   };

//   return (
//     <div className="p-5 lg:px-10">
//       {/* <h2 className="text-3xl font-semibold tracking-tight text-center py-1x0 scroll-m-20 first:mt-0">
//         Product Dashboard
//       </h2> */}
//       {/* <HeroSection /> */}
//       <HeroCard />
//       <ProductCard addToCart={addToCart} products={products} />
//     </div>
//   );
// };

// export default Home;

// New Way*******************************************************************
import HeroCard from "@/components/component/HeroCard";
import HeroCardCarousel from "@/components/component/HeroCardCarousel";
// import HeroSection from "@/components/component/HeroSection";
import ProductSection from "@/components/component/ProductSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-row items-center justify-between gap-2">
        <HeroCardCarousel />
        {/* <HeroSection /> */}
        <HeroCard />
      </div>
      <div>
        <ProductSection />
      </div>
    </div>
  );
};

export default Home;
