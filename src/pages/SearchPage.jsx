import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productss } from "../constants";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = productss.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search products..."
            className="h-12 flex-grow px-4 border rounded-l-md focus:outline-none focus:ring text-black focus:border-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-white text-black px-6 py-3 rounded-r-md"
            onClick={handleSearch}
          >
            Go
          </button>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {searchResults.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">
          No results found. Try a different search term.
        </p>
      )}
    </div>
  );
};

export default SearchPage;
