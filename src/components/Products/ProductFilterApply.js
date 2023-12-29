import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import HeartOff from "../../assets/love.png";
import HeartOn from "../../assets/wishlist.png";

const ProductFilterApply = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
      stars.push(<AiFillStar key={i} color="#ffc300" size={30} />);
    }
    return stars;
  };

  return (
    <div className="bg-[#ebf2fa] rounded">
      <div className="relative w-full h-64">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {wishlist ? (
            <img
              src={HeartOn}
              alt=""
              className="w-12 h-12 cursor-pointer absolute top-2 right-2 text-white"
              onClick={() => setWishlist(!wishlist)}
            />
          ) : (
            <img
              src={HeartOff}
              alt=""
              className="w-12 h-12 cursor-pointer absolute top-2 right-2"
              onClick={() => setWishlist(!wishlist)}
              loading="lazy"
            />
          )}
        </div>

        <button
          className="w-full py-4 text-white bg-gray-500 font-semibold absolute bottom-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          onClick={() => console.log("View Product clicked")}
        >
          View Product
        </button>
      </div>
      <div className="p-3">
        <h1 className="text-xl">{product.name}</h1>
        <h3 className="text-md text-[#4361ee]">Rs. {product.price}</h3>
        <div className="flex space-x-2 items-center">
          {renderStars()} (210){" "}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterApply;
