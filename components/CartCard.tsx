import { delItem } from "@/app/store/features/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { toast, Bounce } from "react-toastify";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const notify = (uuid: string) => {
    dispatch(delItem(uuid));
    toast.success("Product Removed from Cart!", {
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
  };

  const handleIncrement = (uuid: string) => {
    const itemExists = cartArray.find((item) => item.uuid === uuid);
    if (itemExists) {
      dispatch({ type: "cart/incrementQty", payload: { uuid } });
    } else {
      dispatch({ type: "cart/addItem", payload: { uuid } });
    }
  };

  const handleDecrement = (uuid: string) => {
    const itemExists = cartArray.find((item) => item.uuid === uuid);
    if (itemExists && itemExists.qty > 1) {
      dispatch({ type: "cart/decrementQty", payload: { uuid } });
    } else {
      dispatch({ type: "cart/removeItem", payload: { uuid } });
    }
  };

  return (
    <>
      <div className="bg-[#2A254B] sm:w-[1100px] w-[320px] flex justify-between text-[#FAFAFA] font-semibold text-base py-2 px-4 rounded-t-lg">
        <h2>Product</h2>
        <div className="flex justify-between sm:w-[450px] w-[170px]">
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
      </div>
      {cartArray.map((item, i) => (
        <div key={i} className="shadow-lg w-fit">
          <div className="bg-[#ffffff] sm:w-[1100px] w-[320px] flex justify-between items-center text-[#252B42] font-semibold text-base p-4 rounded-b-lg">
            <div className="flex max-sm:flex-col max-sm:gap-2">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={80}
                height={100}
                className="h-[100px] object-cover object-top rounded-lg"
              />
              <div className="flex flex-col max-sm:gap-1 w-full justify-evenly sm:px-4">
                <h2 className="text-[15px] font-semibold sm:block hidden">
                  {item.title}
                </h2>
                <p className="text-sm font-medium">
                  &#36;
                  {item.price}
                </p>

                <button
                  onClick={() => notify(item.uuid as string)}
                  className="text-sm font-medium bg-red-500 sm:hover:bg-white text-white sm:hover:text-red-600 rounded my-1 p-1 w-fit h-fit transition-all duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center sm:w-[450px] w-[170px]">
              <div className="flex h-fit border border-[rgba(37,43,66,0.3)]">
                <button
                  onClick={() => handleDecrement(item.uuid as string)}
                  className="bg-[#2A254B] h-8 w-6 hover:bg-[#FAFAFA] text-[#fafafa] hover:text-[#252B42] transition-all duration-300 text-xs flex justify-center items-center"
                >
                  <i className="bx bx-minus"></i>
                </button>
                <h3 className="text-sm text-[#252B42] font-medium h-8 w-8 flex justify-center items-center">
                  {item.qty}
                </h3>
                <button
                  onClick={() => handleIncrement(item.uuid as string)}
                  className="bg-[#2A254B] h-8 w-6 hover:bg-[#FAFAFA] text-[#fafafa] hover:text-[#252B42] transition-all duration-300 text-xs flex justify-center items-center"
                >
                  <i className="bx bx-plus"></i>
                </button>
              </div>
              <h2 className="text-[#252B42]">
                &#36;
                {(item.dicountPercentage > 0
                  ? (item.price - (item.price * item.dicountPercentage) / 100) *
                    item.qty
                  : item.price * item.qty
                ).toFixed(2)}
              </h2>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default CartCard;
