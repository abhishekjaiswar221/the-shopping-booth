import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from "lucide-react";

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
      <Card key={product.id} className="w-full h-full shadow-sm ">
        <CardHeader className="p-0">
          <picture>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full bg-[#eeeeee] h-full"
            />
          </picture>
        </CardHeader>
        <CardContent className="p-3 pt-2 space-y-2 rounded-xl">
          <div className="space-y-2">
            <CardTitle className="truncate">{product.title}</CardTitle>
            <CardDescription>{product.brand}</CardDescription>
          </div>
          <div className="flex flex-col w-full gap-2 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold tracking-wide scroll-m-20">
                ${product.price}
              </h4>
            </div>
            <div>
              <Button
                className="w-full rounded-lg xl:w-fit"
                onClick={handleClick}
              >
                <ShoppingCart className="w-4 h-4 mr-2" /> {btnText}
              </Button>
            </div>
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
