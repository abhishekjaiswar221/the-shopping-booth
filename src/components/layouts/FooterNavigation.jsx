import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              {/* <MountainIcon className="w-6 h-6" /> */}
              <h4 className="text-lg font-medium text-muted-foreground">
                The Shopping Booth
              </h4>
            </Link>
            <p className="text-sm leading-relaxed">
              Discover the best products for your home, office, and lifestyle.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-muted-foreground">
              Popular Categories
            </h4>
            <nav className="grid gap-2">
              <Link href="#" className="hover:underline">
                Electronics
              </Link>
              <Link href="#" className="hover:underline">
                Clothing
              </Link>
              <Link href="#" className="hover:underline">
                Home & Garden
              </Link>
              <Link href="#" className="hover:underline">
                Beauty & Personal Care
              </Link>
              <Link href="#" className="hover:underline">
                Sports & Outdoors
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-muted-foreground">
              Quick Links
            </h4>
            <nav className="grid gap-2">
              <Link href="#" className="hover:underline">
                About Us
              </Link>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
              <Link href="#" className="hover:underline">
                FAQs
              </Link>
              <Link href="#" className="hover:underline">
                Shipping & Returns
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-muted-foreground">
              Newsletter
            </h4>
            <p className="text-sm leading-relaxed">
              Subscribe to our newsletter to get the latest updates and
              exclusive offers.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="py-4 text-sm text-center border-t border-muted/40">
        <p>&copy; 2024 The Shopping Booth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNavigation;
