"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartToast from "@/components/AddToCartToast";

interface ProductDetailsProps {
  data: {
    _id: string;
    title: string;
    description: string;
    price: number;
    dicountPercentage: number;
    imageUrl: string;
    productImage: {
      asset: {
        _ref: string;
      };
    };
    tags: string[];
    slug: number;
    qty: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const [cartItem] = useState({
    _id: data._id,
    title: data.title,
    price: data.price,
    imageUrl: data.imageUrl,
    slug: data.slug,
    qty: data.qty,
  });
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto py-8">
        <div className="flex justify-center bg-[#FAFAFA]">
          <div className="py-6 flex max-sm:flex-col items-center sm:w-[990px] gap-[30px]">
            <div className="flex items-center justify-center gap-[15px] py-[10px]">
              <Link
                href="/"
                className="text-[15px] font-bold text-[#252B42] hover:underline"
              >
                Home
              </Link>
              <Image
                src="/arrowRightGray.svg"
                alt="Arrow"
                width={9}
                height={16}
              />
              <h6 className="text-[14px] font-bold text-[#737373]">Shop</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#FAFAFA]">
          <div className="sm:pb-12 max-sm:pt-8 flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col max-sm:items-center sm:gap-4 gap-11">
              <div className="sm:block hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product Image"
                  width={500}
                  height={400}
                  className="w-[500px] h-[480px] object-cover"
                />
              </div>
              <div className="max-sm:block hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product Image"
                  width={320}
                  height={250}
                  className="w-[320px] h-[250px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 sm:p-4 justify-between max-sm:w-[350px]">
              <h4 className="text-[20px] font-medium text-[#252B42]">
                {data.title}
              </h4>
              <div className="flex gap-[10px]">
                <div className="flex gap-[5px]">
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/star.svg" alt="Star" width={21} height={21} />
                </div>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  10 Reviews
                </h6>
              </div>
              <div className="text-[24px] font-bold text-[#252B42]">
                ${data.price}
              </div>
              <div className="flex gap-[5px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Availability :
                </h6>
                <h6 className="text-[14px] font-bold text-[#2A254B]">
                  In Stock
                </h6>
              </div>
              <div className="sm:text-[12px] text-[14px] sm:font-bold font-extrabold max-sm:italic sm:text-[#737373] sm:flex items-center">
                {data.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="sm:bg-[#d1d1d1] rounded-md mr-2 sm:p-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-[#858585] sm:w-[430px] line-clamp-6">
                {data.description}
              </p>
              <hr className="border-[#BDBDBD]" />

              <div className="relative group">
                <AddToCartToast cartItem={cartItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
