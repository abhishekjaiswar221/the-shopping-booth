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
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  // State to store the fetched data
  const [products, setProducts] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:flex-wrap">
      {products.map((product) => (
        <Card key={product.id} className="w-72">
          <CardContent className="flex items-center justify-center pb-0">
            <img className="w-56 h-56" src={product.thumbnail} alt="" />
          </CardContent>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>
              {product.description.slice(0, 100) + "..."}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between gap-5">
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <p>{product.price}$</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
