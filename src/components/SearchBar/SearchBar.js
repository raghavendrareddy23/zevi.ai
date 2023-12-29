//created searchbar with toasted messages

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onFocusChange, suggestionBox }) => {
  const [searchString, setSearchString] = useState("");

  const handleFocus = (event) => {
    event.preventDefault();
    if (searchString.length === 0 && !suggestionBox) {
      toast.error("Please enter the text....");
      return;
    }

    onFocusChange(!suggestionBox);
    setSearchString("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFocus(event);
    }
  };

  return (
    <div className="flex justify-center align-middle items-center mt-6">
    <div className="w-full h-14 max-w-md bg-white flex rounded-xl items-center">
      <input
        type="text"
        value={searchString}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        onChange={(e) => setSearchString(e.target.value)}
        className="block w-full px-4 py-2 rounded-lg bg-white border-neutral-300 bg-transparent text-base outline-none focus:border-primary focus:shadow-outline focus:outline-none"
      />
      <button
        type="button"
        className="flex items-center justify-center w-12 bg-primary text-white rounded-r"
        onClick={handleFocus}
      >
        {suggestionBox ? (
          <ImCross size={20} color="white" />
        ) : (
          <FiSearch size={30} color="gray" />
        )}
      </button>
    </div>
  </div>
  );
};

export default SearchBar;
