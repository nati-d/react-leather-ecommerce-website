import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToSavedItems } from "../features/saveSlice";
import { removeFromSavedItems } from "../features/saveSlice"; // Add this import
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saveProduct.savedItems);
  const isSaved = savedItems.some((savedItem) => savedItem.id === item.id);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeFromSavedItems(item.id)); // Assuming removeFromSavedItems is an action
    } else {
      dispatch(addToSavedItems(item));
    }
  };

  return (
    <div className="w-[350px] h-[600px] border flex flex-col justify-between relative cursor-pointer" style={{ background: "#d9cfc1" }}>
      <CiHeart
        className={`absolute top-3 left-3 text-3xl ${isSaved ? "text-red-500" : "text-black"}`}
        onClick={handleSave}
      />
      <img src={item.img} alt="" className="w-full h-[90%]" />
      <div>
        <Link key={item.id} to={`/product/${item.id}`}>
          <p className="text-black font-light mx-2 mt-3">{item.title}</p>
        </Link>
        <h3 className="text-black text-xl font-bold mx-2">{item.price} Br</h3>
      </div>
    </div>
  );
};

export default ProductCard;
