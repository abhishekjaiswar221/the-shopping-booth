import React from "react";
import PropTypes from "prop-types";
// import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";

// eslint-disable-next-line no-unused-vars
const ProductCard = ({ product, addToCart, removeItem, btnText, property }) => {
  const { toast } = useToast();

  // eslint-disable-next-line no-unused-vars
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
        <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full top-3 right-3">
          <Heart
            className="text-primary fill-primary"
            size={20}
            strokeWidth={1.5}
          />
        </div>
        <CardHeader className="p-0">
          <picture>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full bg-gray-100 rounded-lg lg:h-72"
            />
          </picture>
        </CardHeader>
        <CardContent className="p-0 pt-2 space-y-2 rounded-lg">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold tracking-wide scroll-m-20">
              ${product.price}
            </h4>
          </div>
          <div className="space-y-2">
            <CardTitle>{product.title.slice(0, 26)}</CardTitle>
            {/* <p className="text-muted-foreground">
              {product.description.slice(0, 20) + "..."}
            </p> */}
            <CardDescription>{product.brand}</CardDescription>
          </div>
          {/* <div>
            <Button onClick={handleClick}>{btnText}</Button>
          </div> */}
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
