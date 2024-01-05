// Modal.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const navigate = useNavigate()

  const handleClose = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Thank You for Your Purchase!</h2>
        <p className="text-gray-600">Congratulations on your new items.</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-6 py-3 rounded mt-8 hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
