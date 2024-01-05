// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex md:flex-row justify-between items-center mb-8 border-b pb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded" />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-500">{item.price} Br</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="text-gray-500 px-3 py-1 rounded border border-gray-500 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <p className="text-gray-500 mx-3">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="text-gray-500 px-3 py-1 rounded border border-gray-500 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col md:flex-row justify-end items-center">
            <p className="text-2xl font-bold mt-4 md:mt-0 md:mr-8">
              Total: 
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              {" "}Br
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mt-4 md:mt-0" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
