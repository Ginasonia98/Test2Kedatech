import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-500 cursor-pointer"
        >
          X
        </button>
        <p className='mt-4'>Please complete your payment.</p>
      </div>
    </div>
  );
};

export default Modal;

