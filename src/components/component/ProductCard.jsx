import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ product, addToCart, removeItem, btnText, property }) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (property === "add") {
      addToCart(product);
      toast({
        description: "Your product is added to the cart.",
      });
    } else if (property === "remove") {
      removeItem(product.id);
      toast({
        description: "Your product is removed from the cart.",
      });
    }
  };

  return (
    <>
      <Card
        key={product.id}
        className="max-w-sm overflow-hidden transition-all duration-500 transform rounded-lg border-none shadow-md w-[335px] lg:h-[425px] lg:w-72 hover:scale-105 relative top-20"
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
            <Button onClick={handleClick}>{btnText}</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  removeItem: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
};

export default ProductCard;
