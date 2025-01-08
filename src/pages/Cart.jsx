import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { remove } from "@/store/cartSlice";
import EmptyCart from "@/components/EmptyCart";
import { Button } from "@/components/ui/button";
import CartProductCard from "@/components/component/CartProductCard";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }
  const dispatch = useDispatch((state) => state.cart);
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const [cartItems, setCartItems] = useState(cartProducts);
  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
    console.log(newQuantity);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.minimumOrderQuantity,
    0
  );

  return (
    <div className="p-4 lg:p-10 xl:px-20">
      <Card className="w-full border-none shadow-none">
        <CardHeader className="px-0">
          <CardTitle className="text-3xl font-bold tracking-tight scroll-m-20 lg:text-4xl">
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 border-t">
          <ul className="">
            {cartProducts.map((product) => (
              <CartProductCard
                key={product.id}
                product={product}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex items-center justify-between py-20">
          <div className="text-xl font-semibold md:text-2xl">
            Total: ${total.toFixed(2)}
          </div>
          <Button
            className="rounded-xl md:w-44 lg:w-48 md:h-8 lg:h-10"
            disabled={cartProducts.length === 0}
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
