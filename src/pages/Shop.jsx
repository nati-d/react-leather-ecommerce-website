import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";
import { productss } from "../constants";
import { Link } from "react-router-dom";

const itemsPerPage = 8;

const Shop = () => {
  const [originalProducts] = useState(productss);
  const [products, setProducts] = useState([originalProducts]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    filterAndSortProducts();
  }, [selectedCategory, sortBy, currentPage]);

  const filterAndSortProducts = async () => {
    setLoading(true);

    let filteredProducts = [...originalProducts];

    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === "priceLowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setProducts([...filteredProducts.slice(startIndex, endIndex)]);
    setLoading(false);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const totalPages = Math.ceil(productss.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(0);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border p-2 bg-white text-black"
          >
            <option value="all">All</option>
            <option value="bag">Bags</option>
            <option value="wallet">Wallets</option>
            <option value="shoe">Shoes</option>
            <option value="belt">Belts</option>
            <option value="coat">Coats</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border p-2 bg-white text-black"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
              <ProductCard item={item} className="mb-8" />
          ))}
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="Previous"
        marginPagesDisplayed={1}
        containerClassName="flex justify-center mt-4"
        activeClassName="bg-white text-black"
        pageClassName="mx-2 px-4 py-2 border  hover:bg-blue-200"
        previousClassName="mx-2 px-4 py-2 border  hover:bg-blue-200"
        nextClassName="mx-2 px-4 py-2 border  hover:bg-blue-200"
        breakClassName="mx-2 px-4 py-2 border"
      />
    </div>
  );
};

export default Shop;
