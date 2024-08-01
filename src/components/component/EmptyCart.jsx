import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center h-[645px]">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet
          </p>
          <Button className="mt-4 rounded-lg" asChild>
            <Link to={"/"}>Add Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
