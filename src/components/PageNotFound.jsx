import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen">
      <div className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Button className="rounded-lg" asChild>
              <Link to={"/"}>Go Back Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
