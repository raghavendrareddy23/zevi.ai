import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products/Products"

const ProductPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Link to="/">
        <h1 className="py-4 text-3xl absolute right-8">Zevi</h1>
      </Link>
      <Products />
    </div>
  );
};

export default ProductPage;
