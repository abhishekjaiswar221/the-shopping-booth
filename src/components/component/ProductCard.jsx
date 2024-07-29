import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";

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
        className="max-w-sm relative border-none shadow-none w-[335px] lg:h-[425px] lg:w-72"
      >
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full bg-gray-100 rounded-lg h-72"
          />
        </div>
        <CardContent className="p-4 space-y-2">
          <div className="space-y-2">
            <h3 className="text-base font-semibold">
              {product.title.slice(0, 26)}
            </h3>
            {/* <p className="text-muted-foreground">
              {product.description.slice(0, 20) + "..."}
            </p> */}
            <p>{product.brand}</p>
            {/* <span className="text-xl font-bold">${product.price}</span> */}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${product.price}</span>
            {/* <Button className="rounded-full" onClick={handleClick}>
              {btnText}
            </Button> */}
          </div>
        </CardContent>
        <div className="absolute flex items-center justify-center w-10 h-10 border rounded-full border-primary top-3 right-3 bg-secondary">
          <Heart
            className="text-primary fill-primary"
            size={20}
            strokeWidth={1.5}
          />
        </div>
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
