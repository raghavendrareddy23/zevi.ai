//pages for routing

import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SuggestionBox from "../components/SearchBar/SuggessionBox";

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);

  const setFocusHandler = (value) => {
    setShowSuggestionBox(value);
  };
  console.log(showSuggestionBox);

  return (
    <div>
      <h1 className="py-4 text-3xl absolute right-8 text-white">Zevi</h1>
      <SearchBar onFocusChange={setFocusHandler} suggestionBox={showSuggestionBox} />
      {showSuggestionBox && <SuggestionBox />}
    </div>
  );
};

export default Home;
