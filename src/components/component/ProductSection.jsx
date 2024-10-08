// import React from "react";
// import { add } from "@/store/cartSlice";
// import HTTPStatus from "@/utils/HTTPStatus";
// import { getProducts } from "@/store/productSlice";
// import { useDispatch, useSelector } from "react-redux";

// const ProductCard = () => {
//   const dispatch = useDispatch();
//   const { data: products, status } = useSelector((state) => state.products);

//   // Call fetchData on component mount
//   useEffect(() => {
//     //Dispatch an action for fetchProducts
//     dispatch(getProducts());
//   }, []);

//   if (status === HTTPStatus.LOADING) {
//     return <p>Loading...</p>;
//   }

//   if (status === HTTPStatus.ERROR) {
//     return <p>Something went wrong! Try agin later</p>;
//   }

//   const addToCart = (product) => {
//     dispatch(add(product));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-5 md:flex md:flex-row md:flex-wrap">
//       {products.map((product) => (
//       <Card
//         key={product.id}
//         className="max-w-sm overflow-hidden transition-all duration-500 transform rounded-md border-none shadow-md w-[335px] md:h-[425px] md:w-72 hover:scale-105"
//       >
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="object-cover w-full bg-gray-100 rounded-md h-72"
//         />
//         <CardContent className="p-4 space-y-2">
//           <div className="space-y-2">
//             <h3 className="text-base font-semibold">
//               {product.title.slice(0, 26)}
//             </h3>
//             <p className="text-muted-foreground">
//               {product.description.slice(0, 20) + "..."}
//             </p>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-bold">${product.price}</span>
//             <Button onClick={() => addToCart(product)}>Add to Cart</Button>
//           </div>
//         </CardContent>
//       </Card>
//       ))}
//     </div>
//   );
// };
// export default ProductCard;

import React from "react";
import { useGetAllProductsQuery } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const { data, isLoading, isSuccess, isError } = useGetAllProductsQuery();

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
    <div className="flex flex-col items-center justify-between gap-12 md:gap-8 md:flex md:flex-row md:flex-wrap lg:gap-6">
      {content}
    </div>
  );
};

export default ProductSection;
