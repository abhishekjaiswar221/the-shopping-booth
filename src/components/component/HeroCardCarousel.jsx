import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import StatusCode from "@/utils/StatusCode";
import { getCarouselProducts } from "@/store/carouselSlice";

const HeroCardCarousel = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.carousel);

  // Call fetchData on component mount
  useEffect(() => {
    //Dispatch an action for fetchProducts
    dispatch(getCarouselProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong! Try agin later</p>;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-[800px] h-[400px] flex justify-center items-center"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="p-1">
              <Card className="h-[400px] text-center content-center">
                <CardContent className="flex items-center justify-center w-full p-6">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCardCarousel;
