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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-stretch justify-center gap-24">
      <div className="flex flex-row items-center justify-between gap-5">
        <HeroCardCarousel />
        <HeroCard />
        {/* <HeroSection /> */}
      </div>
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              Popular Products
            </h3>
          </div>
          <div className="space-x-1">
            <Button
              variant={"outline"}
              className="border border-black rounded-full"
            >
              Clothes & Shoes
            </Button>
            <Button className="rounded-full">Electronics</Button>
            <Button
              variant={"outline"}
              className="border border-black rounded-full"
            >
              Sports goods
            </Button>
            <Button
              variant={"outline"}
              className="border border-black rounded-full"
            >
              Children&apos;s goods
            </Button>
            <Button
              variant={"outline"}
              className="border border-black rounded-full"
            >
              Beauty
            </Button>
            <Button
              variant={"outline"}
              className="border border-black rounded-full"
            >
              Furniture
            </Button>
          </div>
        </div>
        <div>
          <ProductSection />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-muted-foreground">
              1604 trending products <br /> in 16 categories
            </p>
          </div>
          <div>
            <Button className="rounded-full w-44">
              See all{" "}
              <span>
                <ArrowRight size={22} strokeWidth={1.5} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
