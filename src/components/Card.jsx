import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ title, list }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className={`flex flex-col rounded-lg w-96 h-96 mb-10 border border-blue-600 text-blue-600`}
      >
        <div className="border-b-2 border-blue-600 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 font-bold">
          <h5 className="text-center">{title}</h5>
        </div>
        <p className='text-center mt-3 font-bold'>{list.price}</p>
        <p className='font-bold ml-10 mt-2'>Fasilitas:</p>
        <div className="mt-5">
          <ul className="mx-10">
            {list.items.map((item, itemIndex) => (
              <li key={itemIndex} className="">
                {itemIndex + 1} {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto text-center mb-2">
          <button className="border border-blue-600 text-blue-600 font-bold py-2 px-4 rounded mt-3"  onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Card;




