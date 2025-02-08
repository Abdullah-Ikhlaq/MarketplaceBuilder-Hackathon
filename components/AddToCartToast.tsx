"use client";

import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch } from "@/app/store/hooks";
import React from "react";
import { toast, Bounce } from "react-toastify";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: number;
  qty: number;
}

interface AddToCartToastProps {
  cartItem: CartItem;
}

const AddToCartToast: React.FC<AddToCartToastProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.success("Product Added to Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <>
      <button
        onClick={() => {
          notify();
          dispatch(addToCart(cartItem));
        }}
        className="bg-[#2A254B] border-[1px] border-[#E8E8E8] rounded-full py-2 px-4 flex justify-center items-center shadow-md hover:scale-110 duration-300 text-white"
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartToast;
