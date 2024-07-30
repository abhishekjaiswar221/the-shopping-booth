import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const HeroCard = () => {
  return (
    <div className="p-1">
      <Card className="relative h-[400px] shadow bg-[#eeeeee] w-[450px]">
        <CardHeader className="p-0">
          <img
            className="w-full"
            src="https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png"
            alt=""
          />
        </CardHeader>
        <CardContent className="absolute bottom-0 flex items-center justify-between w-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <CardTitle>Bike</CardTitle>
            <CardDescription>Bajaj</CardDescription>
          </div>
          <Button className="rounded-full">Add to cart</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;
