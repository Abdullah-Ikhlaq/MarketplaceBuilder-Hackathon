"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppSelector } from "@/app/store/hooks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const cart = useAppSelector((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="relative w-full p-6 md:py-5 bg-white">
      <div className="flex justify-between md:justify-center items-center md:border-b md:border-lightGray">
        {/* Logo */}
        <h1 className="text-2 font-normal font-clash leading-[29.52px] text-darkBlue">
          Avion
        </h1>

        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            aria-label="Search"
            className="md:relative md:right-[20rem] lg:right-[33rem] flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
          >
            <CiSearch className="text-lg" />
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-darkPrimary hover:bg-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Search Box */}
      {isSearchOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border placeholder:text-white  bg-black/40 text-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center justify-center py-5">
        <ul className="flex justify-between gap-8">
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="/">Home</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Plant pots</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Ceramics</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Tables</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Chairs</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Crockery</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="#">Tableware</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="/products">All Products</a>
          </li>
          <li className="text-[16px] font-normal text-[#726E8D]">
            <a href="/about">About</a>
          </li>
        </ul>
        <Link href={"/cart"}>
          <div className="py-[15px] px-[18px] ml-8 rounded-[37px] hover:bg-[#f2f2f2] transition-all duration-300">
            <label tabIndex={0} role="button">
              <div className="indicator">
                <Image src="/cart2.svg" alt="Cart" width={16} height={16} />
                <span className="bg-[#2A254B] text-[#fff] text-[12px] font-bold rounded-3xl badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </label>
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={clsx(
          "fixed h-full w-full sm:hidden bg-black/50 top-0 left-0 transition-all ease-in-out duration-500",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="bg-[#fafafa] flex flex-col gap-16 h-full p-8 w-[75%]">
          <div className="text-[#737373] text-2xl" onClick={closeMenu}>
            &#10005;
          </div>
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="/"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Products
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-[5px]">
            <p className="text-2xl font-medium text-[#23A6F0]">
              <div>
                <p className="cursor-pointer">Logout</p>
                <div className="bg-[#23A6F0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </p>
          </div>
        </div>
      </div> */}

      {/* <div
        className={`${isOpen ? "block" : "hidden"
          } lg:flex md:grid md:grid-cols-5 flex-col lg:flex-row md:items-center md:justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-1 lg:space-x-8 lg:ml-16 md:ml-4 `}
      >
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 md:mt-3 lg:-mt-1 mt-0 hover:border-darkPrimary"
        >
          Home 
        </Link>
        <Link
          href="/"
          className="block text-center text-darkPrimary border-b border-transparent py-1 hover:border-darkPrimary"
        >
          Tables 
        </Link>
        <Link
          href="/"
          className="block text-center text-darkPrimary border-b border-transparent py-1 hover:border-darkPrimary"
        >
          Chairs 
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-darkPrimary"
        >
          Crockery 
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-darkPrimary"
        >
          Cutlery 
        </Link>
        <Link
          href="/products"
          className="block text-center border-b border-transparent py-1 hover:border-darkPrimary"
        >
          All Products 
        </Link>
        <Link
          href="/about"
          className="block text-center border-b border-transparent py-1 hover:border-darkPrimary"
        >
          About 
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-darkPrimary"
        >
          Admin Pannel 
        </Link>

        <div className="flex gap-4 justify-center">

          <Link href="/" aria-label="User Profile">
            <div className="md:relative md:bottom-[5rem] lg:bottom-7 md:left-[3rem] lg:left-[-1rem] flex items-center justify-center w-6 h-6 rounded-full border border-transparent hover:bg-darkPrimary">
              <Image
                src="/images/user.png"
                alt="User Profile Icon"
                width={16}
                height={16}
                className=""
              />
            </div>
          </Link>

          <Link href="/usercart" aria-label="Cart">
            <div className="md:relative md:bottom-[5rem] lg:bottom-7 md:left-[2.5rem] lg:left-[-2rem] flex items-center justify-center w-6 h-6 rounded-full border border-transparent hover:bg-darkPrimary">
              <Image
                src="/images/cart.png"
                alt="Cart Icon"
                width={16}
                height={16}
                className=""
              />
            </div>
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Header;
