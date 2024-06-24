import React from "react";
import { useParams } from "react-router-dom";
import Products from "../data/dataCoffe";
import ProductPageComponent from "../components/product";
import { FoodItems } from "../data/dataFood";
export const ProductPage = () => {
  const { id, coffee, breakfast } = useParams();

  let product;
  if (breakfast === undefined && id === id && coffee == "coffee") {
    product = Products.find((e) => e.id === parseInt(id));
  } else if (coffee == "food") {
    product = FoodItems.find((e) => e.id === parseInt(id));
  }

  console.log(product);
  console.log(breakfast);
  console.log(coffee);

  return <ProductPageComponent product={product} />; // Pass product as prop
};
