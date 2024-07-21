import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const SignUp = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
        <div className="relative overflow-hidden transition-all duration-300 transform rounded-lg shadow-lg group hover:scale-105">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Product 1"
            width={500}
            height={400}
            className="object-cover w-full h-64 transition-all duration-300 transform group-hover:scale-105"
          />
          <div className="p-4 transition-all duration-300 transform bg-background group-hover:scale-95">
            <h3 className="text-xl font-bold">Wireless Headphones</h3>
            <p className="text-sm text-muted-foreground">
              Experience high-quality audio with our latest wireless headphones.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="font-bold text-primary">$99.99</div>
              <div className="flex items-center gap-2">
                <Button variant="outline">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
