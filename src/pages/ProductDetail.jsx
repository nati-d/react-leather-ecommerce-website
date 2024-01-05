import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productss } from "../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productss.find((item) => item.id === parseInt(id, 10));
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const similarItems = productss.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    console.log('added')
  }

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-center items-center md:w-[60%] md:m-auto">
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-lg mb-8 md:mb-0"
        />
        <div className="ml-0 md:ml-8 flex flex-col space-y-10">
          <h2
            className="text-3xl font-bold mb-4 tracking-wider"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {product.title}
          </h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p>
            <strong>Category: </strong>
            {product.category}
          </p>
          <p className="text-2xl font-bold">${product.price}</p>
          <button className="bg-white text-black px-4 py-2 mt-4 rounded w-max" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      {similarItems.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Related Products</h3>
          <div className="flex flex-wrap gap-8 justify-around">
            {similarItems.slice(0, 3).map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <ProductCard item={item} className="mb-8" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
