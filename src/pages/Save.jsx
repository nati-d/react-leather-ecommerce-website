// src/components/SavedProductsPage.js

import React from "react";
import { useSelector } from "react-redux";
import { selectSavedItems } from "../features/saveSlice";
import ProductCard from "../components/ProductCard";

const Save = () => {
  const savedItems = useSelector(selectSavedItems);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Saved Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {savedItems.map((item) => (
          <ProductCard key={item.id} item={item} showSaveButton={false} />
        ))}
      </div>
    </div>
  );
};

export default Save;
