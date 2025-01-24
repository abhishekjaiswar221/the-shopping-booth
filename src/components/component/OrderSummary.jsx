import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { CircleHelp } from "lucide-react";

const OrderSummary = ({ total, cartProducts }) => {
  const shippingEstimate = 5;
  const taxEstimates = 8.32;
  const orderTotal = total + taxEstimates + shippingEstimate;
  return (
    <Card className="w-full border-none shadow-none lg:mt-14 lg:w-2/5 rounded-xl h-fit bg-zinc-50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight scroll-m-20">
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="text-zinc-600">
        <div className="flex justify-between pb-2 mt-4 leading-7 border-b">
          <p>Subtotal</p>
          <p className="font-semibold text-black">${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pb-2 mt-4 leading-7 border-b">
          <div className="flex items-center justify-center gap-1">
            <p>Shipping Estimates</p>
            <CircleHelp className="w-5 h-5 text-white fill-zinc-500 border-zinc-500" />
          </div>
          <p className="font-semibold text-black">${shippingEstimate}</p>
        </div>
        <div className="flex justify-between pb-2 mt-4 leading-7 border-b">
          <div className="flex items-center justify-center gap-1">
            <p>Tax Estimates</p>
            <CircleHelp className="w-5 h-5 text-white fill-zinc-500 border-zinc-500" />
          </div>
          <p className="font-semibold text-black">${taxEstimates}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-start gap-5">
        <div className="flex justify-between w-full pb-2 mt-4 leading-7">
          <p>Order Total</p>
          <p className="font-semibold text-black">${orderTotal.toFixed(2)}</p>
        </div>
        <Button
          className="w-full h-10 rounded-xl"
          disabled={cartProducts.length === 0}
        >
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

OrderSummary.propTypes = {
  total: PropTypes.func,
  cartProducts: PropTypes.object,
};

export default OrderSummary;
