"use client";

import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const client = createClient({
  projectId: "pv579cps",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

interface fullProduct {
  _id: string;
  name: string;
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
  slug: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<fullProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await client.fetch(`
                *[_type == "product"] {
        _id,
        name,
        description,
        price,
        "imageUrl": image.asset->url,
          "slug": slug.current,
        tags,
      }
                `);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Image
        src="/images/frame143.png"
        alt="Product Background Image"
        width={200}
        height={200}
        className="w-full object-cover"
      />
      <h1 className="font-clash font-normal leading-[50.4px] text-white text-3xl lg:text-[1.9rem] absolute top-[3.5rem] lg:top-[7.7rem] xl:left-[5rem] xl:text-[2.27rem] lg:left-[3.5rem] left-[6rem] md:text-[1.5rem] md:top-[5.1rem] md:left-[3.45rem]">
        All products
      </h1>
      <div className="py-[40px] flex flex-col items-center">
        <div className="grid sm:grid-cols-4 gap-10">
          {products.map((product) => {
            return (
              <div
                key={product._id}
                className="sm:w-[240px] w-[300px] hover:scale-105 transition ease-in-out duration-300 shadow-md rounded-md overflow-hidden"
              >
                <Link href={`/products/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width="300"
                    height="220"
                    className="h-[320px] object-cover"
                  />
                </Link>

                <div className="flex flex-col justify-center items-center gap-4 px-4 py-6">
                  <Link href={`/products/${product.slug}`}>
                    <h2 className="text-[16px] font-bold text-[#252B42] text-center">
                      {product.name}
                    </h2>
                  </Link>
                  <div className="text-[14px] font-semibold text-white text-center">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#737373] p-2 rounded-full m-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-[16px] font-bold text-[#2A254B]">
                    ${product.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[2rem] product-sec-btn mt-28">
        <button className="w-full md:relative mt-[12rem] lg:bottom-[5rem] md:-bottom-[21rem] md:left-[16rem] lg:left-[30rem] xl:left-[36rem] md:mt-0 md:w-[200px] md:h-[56px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-darkPrimary font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out border-2 border-darkPrimary">
          <Link href="/">View collection</Link>
        </button>
      </div>
    </>
  );
};

export default Product;
