"use client";
import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-200">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>

          <div className="modal-container bg-white w-1/2 mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Modal Content</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tristique aliquam malesuada.
            </p>

            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
