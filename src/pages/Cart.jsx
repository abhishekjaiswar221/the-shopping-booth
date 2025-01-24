import React from "react";
import EmptyCart from "@/components/EmptyCart";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "@/store/cartSlice";
import OrderSummary from "@/components/component/OrderSummary";
import CartProductCard from "@/components/component/CartProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }
  const dispatch = useDispatch((state) => state.cart);
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * item.minimumOrderQuantity,
    0
  );

  return (
    <div className="flex flex-col gap-8 p-4 lg:gap-8 xl:gap-10 lg:flex-row lg:p-10 xl:px-20">
      <Card className="w-full border-none shadow-none">
        <CardHeader className="p-0 pb-5 lg:px-0">
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
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </ul>
        </CardContent>
      </Card>
      <OrderSummary total={total} cartProducts={cartProducts} />
    </div>
  );
};

export default Cart;
