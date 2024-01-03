import React, { useState, useEffect } from "react";
import { trending } from "../constants";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";

const itemsPerPage = 8;

const Shop = () => {
  const [originalProducts] = useState(trending);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(0); // Changed to zero-based index

  useEffect(() => {
    filterProducts(selectedCategory, sortBy);
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    paginate();
  }, [products, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); 
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const filterProducts = async (category, sortOption) => {
    try {
      setLoading(true);
      let filteredProducts = [...originalProducts];

      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (sortOption === "priceLowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "priceHighToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setProducts([...filteredProducts]);
    } finally {
      setLoading(false);
    }
  };

  const paginate = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProducts(originalProducts.slice(startIndex, endIndex));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const totalPages = Math.ceil(originalProducts.length / itemsPerPage);

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
            <option value="bags">Bags</option>
            <option value="wallets">Wallets</option>
            <option value="shoes">Shoes</option>
            <option value="belts">Belts</option>
            <option value="coats">Coats</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} className="mb-8" />
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
