import React from "react";
import PropTypes from "prop-types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CardTitle } from "../ui/card";
import { useToast } from "../ui/use-toast";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartProductCard = ({ product, handleUpdateQuantity, removeItem }) => {
  const { toast } = useToast();
  const handleClick = () => {
    removeItem(product.id);
    toast({
      description: "Your product is removed from the cart.",
    });
  };

  return (
    <>
      <li key={product.id} className="py-5 border-b">
        <div className="flex items-center justify-start w-full gap-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-36 w-36 rounded-xl bg-[#eeeeee]"
          />
          <div className="flex flex-col items-start justify-center w-full gap-2 md:justify-between md:flex-row">
            <div className="flex-1">
              <CardTitle className="text-base font-semibold md:text-lg">
                {product.title}
              </CardTitle>
              <p className="font-semibold text-gray-600 lg:text-xl">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-20">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleUpdateQuantity(
                      product.id,
                      product.minimumOrderQuantity - 1
                    )
                  }
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={product.minimumOrderQuantity}
                  onChange={(e) =>
                    handleUpdateQuantity(product.id, parseInt(e.target.value))
                  }
                  className="w-16 h-8 text-center"
                  min="0"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleUpdateQuantity(
                      product.id,
                      product.minimumOrderQuantity + 1
                    )
                  }
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button
                className="w-fit"
                variant="destructive"
                size="sm"
                onClick={handleClick}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Remove Item
              </Button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

CartProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleUpdateQuantity: PropTypes.func,
  removeItem: PropTypes.func,
};

export default CartProductCard;
