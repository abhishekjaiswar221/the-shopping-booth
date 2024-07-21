import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { remove } from "@/store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch((state) => state.cart);
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
      {cartProducts.map((product) => (
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
            <Button onClick={() => removeItem(product.id)}>Remove Item</Button>
            <p>{product.price}$</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
