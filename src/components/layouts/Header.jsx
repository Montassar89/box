import React, { useState } from 'react';

import styled from 'styled-components';

import CardOneModal from './header/CardOneModal';
import CardThreeModal from './header/CardThreeModal';
import CardTowModal from './header/CardTowModal';
import ChevronDownIcon from './header/ChevronDownIcon';
import ChevronUpIcon from './header/ChevronUpIcon';
import CloseIcon from './header/CloseIcon';
import DropMenuItem from './header/DropMenuItem';
import HongIcon from './header/HongIcon';
import HumborgerIcon from './header/HumborgerIcon';
import LogoIcon from './header/LogoIcon';
import Modal from './header/Modal';
import OpenModalButton from './header/OpenModalButton';
import OurServicesIcon from './header/OurServicesIcon';
import SimpleLink from './header/SimpleLink';

const ModalContent = styled.div`
  margin: 10px;
`;

const Header = () => {
  const [isOpen, toggle] = useState(false);

  const handlOpenModal = (open) => {
    console.log('close modal');
    toggle(open);
  };
  const [show, setShow] = useState(null);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const toggleDeliverables = () => {
    setDeliverables(!deliverables);
    setProduct(false);
  };
  const toggleProduct = () => {
    setProduct(!product);
    setDeliverables(false);
  };
  return (
    <>
      <div className="bg-gray-200 h-full w-full ">
        <nav className="bg-white hidden xl:block shadow fixed w-full z-10">
          <div className="container mx-auto px-6 md:py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="items-center md:pr-10 flex">
                <LogoIcon />
                <p className="text-base text-gray-800 ml-3 font-extrabold">
                  BOXFUL
                </p>
              </div>
              <div className="justify-end hidden xl:flex items-center">
                <div className="cursor-pointer inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none transition duration-150 ease-in-out" />
                <div className="hidden md:flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden md:flex">
                    <a
                      className="mx-5 flex items-center py-6 text-sm leading-5 text-indigo-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out relative cursor-pointer"
                      onMouseEnter={() => toggleProduct()}
                      onMouseLeave={() => setProduct(false)}
                    >
                      Our Services
                      <span className="pl-2">
                        <ChevronDownIcon />
                      </span>
                      {product && <DropMenuItem />}
                    </a>

                    <a
                      className="mx-5 flex items-center py-6 text-sm leading-5 text-indigo-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out relative cursor-pointer"
                      onMouseEnter={() => toggleDeliverables()}
                      onMouseLeave={() => setDeliverables(false)}
                    >
                      Hong Kong
                      <span className="pl-2">
                        <ChevronDownIcon />
                      </span>
                      {deliverables && <DropMenuItem />}
                    </a>
                    <a className="mx-5 py-6 block text-sm leading-5 text-gray-800 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out cursor-pointer">
                      Login In
                    </a>
                    <a className="mx-5 py-6 block text-sm leading-5 text-gray-800  hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out cursor-pointer">
                      EN
                    </a>
                    <a className="mx-5 py-6 block text-sm leading-5 text-primary-text  hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out cursor-pointer">
                      7458 5842
                    </a>
                    <a
                      href="https://www.google.com/"
                      className="flex items-center justify-center px-5 py-3
                                        border border-transparent text-base font-medium rounded-full text-white bg-sec-background hover:bg-yellow-600 h-10 m-auto"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-10">
            <div className="w-40 flex items-center">
              <LogoIcon />

              <p className="text-base text-gray-800 ml-3 font-extrabold">
                BOXFUL
              </p>
            </div>
            <div className="flex items-center">
              <div className="">
                <OpenModalButton handlClick={() => handlOpenModal(true)}>
                  Our Services
                </OpenModalButton>
                <Modal
                  isOpen={isOpen}
                  handleClose={() => handlOpenModal(false)}
                >
                  <ModalContent>
                    <CardOneModal />
                    <CardTowModal />
                    <CardThreeModal />
                  </ModalContent>
                </Modal>
              </div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? '' : <HumborgerIcon />}
              </div>

            </div>
          </div>
          {/* Mobile responsive sidebar */}
          <div
            className={
              show
                ? 'w-full h-full fixed z-40  transform -top-0 translate-x-0 xl:hidden '
                : 'xl:hidden w-full h-full absolute z-40  transform -translate-x-full'
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="md:w-96 w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white -right-0 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <LogoIcon />
                          <p className="text-base text-gray-800 ml-3 font-extrabold">
                            BOXFUL
                          </p>
                        </div>
                        <div
                          id="cross"
                          className=" text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <CloseIcon />
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer">
                        <li className="text-indigo-700 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                <OurServicesIcon />
                              </div>
                              <p className="text-indigo-700 xl:text-base md:text-2xl text-base ml-3">
                                Our Services
                              </p>
                            </div>
                            {product ? (
                              <div onClick={() => toggleProduct()}>
                                <ChevronUpIcon />
                              </div>
                            ) : (
                              <div onClick={() => toggleProduct()}>
                                <ChevronDownIcon />
                              </div>
                            )}
                          </div>
                          {product && (
                            <div>
                              <ul className="my-3">
                                <li className="text-gray-800xl:text-base md:text-2xl text-base text-indigo-500 hover:text-white py-2 px-6">
                                  Hong Kong
                                </li>
                                <li className="text-gray-800 xl:text-base md:text-2xl text-base hover:text-indigo-500 py-2 px-6">
                                  Taipei
                                </li>
                                <li className="text-gray-800 xl:text-base md:text-2xl text-base hover:text-indigo-500 py-2 px-6">
                                  Seoul
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-indigo-700 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                <HongIcon />
                              </div>
                              <p className="text-indigo-700 xl:text-base md:text-2xl text-base ml-3">
                                Hong Kong
                              </p>
                            </div>
                            {deliverables ? (
                              <div onClick={() => toggleDeliverables()}>
                                <ChevronUpIcon />
                              </div>
                            ) : (
                              <div onClick={() => toggleDeliverables()}>
                                <ChevronDownIcon />
                              </div>
                            )}
                          </div>
                          {deliverables && (
                            <div>
                              <ul className="my-3">
                                <li className="xl:text-base md:text-2xl text-base text-indigo-500 hover:text-white py-2 px-6">
                                  Hong Kong
                                </li>
                                <li className="text-gray-800 xl:text-base md:text-2xl text-base hover:text-indigo-500 py-2 px-6">
                                  Taipei
                                </li>
                                <li className="text-gray-800 xl:text-base md:text-2xl text-base hover:text-indigo-500 py-2 px-6">
                                  Seoul
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                      </a>

                      <SimpleLink text="Log In" />
                      <SimpleLink text="EN" />
                      <SimpleLink text="5454 5412" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
