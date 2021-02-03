import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';




const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '0' },
  exit: { top: '-50%' },
};
const Modal = ({ handleClose, children, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
    <div
    className="fixed -top-0 -left-0 w-full h-full"
      initial="initial"
      animate="isOpen"
      exit="exit"
      variants={modalVariant}
    >
      <div
      className="fixed -top-0 -left-0 w-full h-full bg-white"
       variants={containerVariant}>
        <div className="flex items-center justify-between h-16 px-4">
          <p>Our Services</p>

          <svg
                className="w-4 h-4 cursor-pointer"
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.39 20.39"
          >
            <title>close</title>
            <line
              x1="19.39"
              y1="19.39"
              x2="1"
              y2="1"
              fill="none"
              stroke="#5c3aff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="19.39"
              x2="19.39"
              y2="1"
              fill="none"
              stroke="#5c3aff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>

        </div>
        {children}
      </div>
    </div>
    )}
  </AnimatePresence>
);

export default Modal;
