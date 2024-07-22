import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
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
        <Card key={product.id} className="w-72">
          <CardContent className="flex items-center justify-center pb-0">
            <img className="w-56 h-56" src={product.thumbnail} alt="" />
          </CardContent>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>
              {product.description.slice(0, 100) + "..."}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between gap-5">
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <p>{product.price}$</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
