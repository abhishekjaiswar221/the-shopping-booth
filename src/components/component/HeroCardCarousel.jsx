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
// import { Button } from "../ui/button";

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
      className="relative flex items-center justify-center w-full h-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="p-1">
              <Card className="h-[400px] text-center content-center bg-gray-100">
                <CardContent className="relative flex flex-col items-center justify-center w-full p-6">
                  <div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-cover"
                    />
                  </div>
                  {/* <div className="absolute bottom-0     rounded-md w-[650px] flex justify-between items-center px-10">
                    <div>
                      <CardTitle>{product.title}</CardTitle>
                    </div>
                    <div>
                      <Button className="rounded-full">Add to cart</Button>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-10 w-10 absolute top-[200px] left-5" />
      <CarouselNext className="h-10 w-10 absolute top-[200px] right-5" />
    </Carousel>
  );
};

export default HeroCardCarousel;
