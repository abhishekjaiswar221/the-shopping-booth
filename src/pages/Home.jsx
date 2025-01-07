import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/component/HeroBanner";
import ProductSection from "@/components/component/ProductSection";
import CategoryButton from "@/components/component/CategoryButton";

const Home = () => {
  return (
    <div className="flex flex-col items-stretch justify-center gap-16">
      <div>
        <HeroBanner />
      </div>
      <div className="px-4 space-y-14 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              Popular Products
            </h3>
          </div>
          <div className="space-x-1 space-y-2 lg:space-x-2 lg:space-y-0">
            <CategoryButton />
          </div>
        </div>
        <div>
          <ProductSection />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-base text-muted-foreground">
              1604 trending products <br /> in 16 categories
            </p>
          </div>
          <div>
            <Button asChild className="w-24 rounded-xl md:w-44">
              <Link to={"/technology"}>
                See all
                <ArrowRight
                  className="w-4 h-4 ml-2"
                  size={18}
                  strokeWidth={1.5}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
