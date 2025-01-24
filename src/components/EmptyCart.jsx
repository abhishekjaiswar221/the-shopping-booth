import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 lg:px-10 xl:px-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <img
            className="w-full h-52"
            src="/images/empty-cart.webp"
            alt="Empty Cart Illustrated Image"
          />
        </div>
        <h3 className="text-3xl font-bold tracking-tight xl:text-5xl lg:text-4xl">
          Your Cart is Empty!
        </h3>
        <p className="text-sm text-zinc-500">
          Looks like you haven&apos;t added anything to your cart yet!
        </p>
        <Button size="lg" className="mt-4 rounded-xl" asChild>
          <Link to={"/"}>Add Product</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
