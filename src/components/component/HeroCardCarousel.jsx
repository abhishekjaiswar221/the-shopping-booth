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
import HTTPStatus from "@/utils/HTTPStatus";
import { getCarouselProducts } from "@/store/carouselSlice";
import { Heart } from "lucide-react";
// import { Button } from "../ui/button";

const HeroCardCarousel = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.carousel);

  // Call fetchData on component mount
  useEffect(() => {
    //Dispatch an action for fetchProducts
    dispatch(getCarouselProducts());
  }, []);

  if (status === HTTPStatus.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === HTTPStatus.ERROR) {
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
          <CarouselItem className="md:basis-1/2" key={product.id}>
            <div className="p-1">
              <Card className="lg:h-[400px] border-none shadow-none p-0 text-center rounded-xl content-center bg-[#f1f2f4] relative">
                <div className="absolute flex items-center justify-center w-10 h-10 bg-white border rounded-full top-3 right-3">
                  <Heart
                    className="text-[#e11d48] fill-[#e11d48]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
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
      <CarouselPrevious className="absolute rounded-xl md:w-10 md:h-10 left-3 lg:left-4 xl:right-5" />
      <CarouselNext className="absolute rounded-xl md:w-10 md:h-10 right-3 lg:right-4 xl:right-5" />
    </Carousel>
  );
};

export default HeroCardCarousel;
