// Checkout.js
import React, {useState} from "react";
import Modal from "../components/Modal";

const Checkout = () => {
  const handleCheckout = () => {
    setModalOpen(true);

    console.log("Checkout clicked");
  };

  const [isModalOpen, setModalOpen] = useState(false);



  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 md:w-[60%]">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      <div className="flex flex-col gap-14 ">
        <div className=" ">
          <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md text-black"
                  placeholder="Abebe"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md text-black"
                  placeholder="Kebede"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-white mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="Bole Road"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="+251 123-456-789"
              />
            </div>
          </form>
        </div>
        <div className=" ">
          <h3 className="text-xl font-bold mb-4">Payment Information</h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-white mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-white mb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="MM/YYYY"
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-white mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="mt-1 p-2 w-full border rounded-md text-black"
                placeholder="123"
              />
            </div>
          </form>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-6 py-3 rounded mt-8 hover:bg-blue-600"
      >
        Complete Purchase
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Checkout;
