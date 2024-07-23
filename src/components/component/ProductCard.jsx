import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/cartSlice";
import { getProducts } from "@/store/productSlice";
import StatusCode from "@/utils/StatusCode";

const ProductCard = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  // Call fetchData on component mount
  useEffect(() => {
    //Dispatch an action for fetchProducts
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong! Try agin later</p>;
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
      {products.map((product) => (
        <Card
          key={product.id}
          className="max-w-sm overflow-hidden transition-all duration-500 transform rounded-lg border-none shadow-md w-[335px] lg:h-[425px] lg:w-72 hover:scale-105"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full bg-gray-100 rounded-lg h-72"
          />
          <CardContent className="p-4 space-y-2">
            <div className="space-y-2">
              <h3 className="text-base font-semibold">
                {product.title.slice(0, 26)}
              </h3>
              <p className="text-muted-foreground">
                {product.description.slice(0, 20) + "..."}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">${product.price}</span>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
