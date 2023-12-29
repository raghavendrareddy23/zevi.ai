//added projects with faker-js

import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ProductFilterApply from "./ProductFilterApply";
import Filters from "./ProductFilters";
import NoResult from "../../assets/nodata.avif";
import SearchBar from "../SearchBar/SearchBar";
import { FiSearch } from "react-icons/fi";

const Products = () => {
  const [productCollection, setProductCollection] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const numberOfProduct = 12;

  const generateProduct = (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
      const product = {
        id: i,
        name: faker.commerce.productName(),
        image: faker.image.urlLoremFlickr({
          category: "location",
          width: 640,
          height: 480,
        }),
        price: faker.commerce.price(),
        rating: Math.floor(Math.random() * 5) + 1,
        brand: i % 2 === 0 ? "Mango" : "HM",
      };
      products.push(product);
    }
    return products;
  };

  const getFilterHandler = (value) => {
    setSelectedFilters(value);
  };

  const applyFilters = (products, filters, searchQuery) => {
    let filteredProducts = [...products];

    if (Object.keys(filters).length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          (+product.price <= 500 || !filters.und500) &&
          (+product.price > 500 || !filters.abv500und3000) &&
          (product.brand === "Mango" || !filters.mango) &&
          (product.brand === "HM" || !filters.hm) &&
          (product.rating === 1 || !filters.onestar) &&
          (product.rating === 2 || !filters.twostar) &&
          (product.rating === 3 || !filters.threestar) &&
          (product.rating === 4 || !filters.fourstar) &&
          (product.rating === 5 || !filters.fivestar)
        );
      });
    }

    if (searchQuery.trim() !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };

  useEffect(() => {
    const generatedProduct = generateProduct(numberOfProduct);
    setProductCollection(generatedProduct);
  }, []);

  useEffect(() => {
    const filteredProducts = applyFilters(
      productCollection,
      selectedFilters,
      searchQuery
    );
    setFilteredCollection(filteredProducts);
  }, [selectedFilters, productCollection, searchQuery]);

  return (
    <div>
      <div className="mx-auto pt-4">
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-auto px-4 py-2 rounded outline-none border-black text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="px-4 py-2 sm:py-2 bg-gray-500 rounded text-white hidden md:block"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>
      <SearchBar className="border"/>

      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/6">
          <Filters getFilters={getFilterHandler} />
        </div>
        <div className="md:w-5/6">
          {filteredCollection.length === 0 ? (
            <img src={NoResult} alt="" className="w-full h-[100vh]" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl">
              {filteredCollection?.map((product) => (
                <ProductFilterApply key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
