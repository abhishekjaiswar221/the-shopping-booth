import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/store/cartSlice";
import ProductCard from "@/components/component/ProductCard";
import EmptyCart from "@/components/EmptyCart";

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
    <div className="pt-32 pb-16">
      <div className="px-5 space-y-10 lg:px-10 xl:px-20">
        <div className="p-6 bg-white md:p-8 xl:p-6 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-12 md:gap-8 md:flex md:flex-row md:flex-wrap lg:gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
