"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../reuseableComponents/ProductCard";

const PopularProducts = () => {
  return (
    <div className="relative mt-[14rem] h-[573px] md:h-[744px] bg-white md:px-[2rem] mx-auto lg:px-0 lg:mx-[1.5rem] md:mt-0 lg:top-[20rem] xl:mx-[3rem] popular-product">
      <h4 className="relative my-4 pl-4 font-clash font-normal leading-[24.6px] text-darkPrimary text-lg lg:text-4xl xs:text-3xl lg:bottom-[10rem] popular-heading">
        Our popular products
      </h4>

      <div className="md:hidden px-4 md:px-0 py-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          slidesPerView={2}
          spaceBetween={0}
        >
          <SwiperSlide>
            <ProductCard
              name="testname"
              relativeImage="lamp"
              heading="The Lucy Lamp"
              price={399}
              id="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="testname"
              relativeImage="Vase"
              heading="Rustic Vase Set"
              price={155}
              id="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="testname"
              relativeImage="SilkVase"
              heading="The Silky Vase"
              price={125}
              id="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name="testname"
              relativeImage="BlackChair"
              heading="The Dandy Chair"
              price={250}
              id="4"
            />
          </SwiperSlide>
        </Swiper>
      </div> 

      <div className="relative hidden md:bottom-[8rem] md:h-[375px] md:flex gap-4 hero-popular">
        <div
          key="/products/id10"
          className="hidden md:flex flex-col w-[630px] h-[375px] xl:w-[800px] gap-2 hero-popular-products  group"
        >
          <Image
            src={`/images/sofa.png`}
            alt="Sofa Image"
            width={200}
            height={200}
            className="w-[630px] h-[375px] xl:w-[800px] hero-popular-products"
          />

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-clash font-normal leading-7 text-darkPrimary lg:text-xl">
              The Poplar suede sofa
            </h4>
            <p className="font-satoshi font-normal leading-[27px] text-darkPrimary lg:text-xl">
              &pound; 980
            </p>
          </div>

          {/* Add to Cart button */}
          <button className="w-[630px] relative bottom-[8.7rem] left-[19.7rem] transform -translate-x-1/2 px-4 md:px-8 py-2 md:py-4  bg-black/70 rounded text-white opacity-0  group-hover:opacity-100 transition-opacity">
            <Link href={`/products/id10`} className="text-sm lg:text-xl">
              Add to Cart
            </Link>
          </button>
        </div>
      <div className="blackChair">
      <ProductCard
          name="testname"
          relativeImage="BlackChair"
          heading="The Dandy Chair"
          price={250}
          id="4"
        />
      </div>
        <ProductCard
          name="testname"
          relativeImage="oldChair"
          heading="The Dandy Chair"
          price={250}
          id="9"
        />
      </div>

      <div className="relative lg:-left-[2rem] lg:top-[4rem] flex lg:justify-center mt-0 md:mt-[4rem] lg:mt-0 md:left-[12rem] hero-popular-button">
        <button className=" m-2 mt-4 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg ">
          View collection
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
