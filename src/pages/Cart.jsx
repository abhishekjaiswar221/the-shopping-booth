import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/store/cartSlice";
import ProductCard from "@/components/component/ProductCard";
import EmptyCart from "@/components/component/EmptyCart";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }
  const dispatch = useDispatch((state) => state.cart);
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
      {cartProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeItem={removeItem}
          btnText={"Remove Item"}
          property={"remove"}
        />
      ))}
    </div>
  );
};

export default Cart;
