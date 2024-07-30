import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <main className="flex flex-col flex-1 gap-4 py-4 h-[690px] lg:gap-6 lg:py-6">
      {/* <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div> */}
      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet
          </p>
          <Link to={"/"}>
            <Button className="mt-4">Add Product</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmptyCart;
