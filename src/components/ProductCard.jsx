import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Button } from "./ui/button";

const ProductCard = () => {
  // State to store the fetched data
  const [products, setProducts] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Card key={product.id} className="pt-6 w-96">
          <CardContent className="flex items-center justify-center">
            <img className="w-52 h-52" src={product.image} alt="" />
          </CardContent>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>
              {product.description.slice(0, 100) + "..."}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between gap-5">
            <Button>Add to Cart</Button>
            <p>{product.price}$</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
