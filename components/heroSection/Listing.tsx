import ProductCard from "../reuseableComponents/ProductCard";

const Listing = () => {
  return (
    <div className="relative h-[811px] mx-auto lg:mx-2 lg:h-[761px] bg-white flex flex-col gap-3 py-[3rem] mt-[17rem] lg:mt-[6rem] md:bottom-[25rem] lg:-bottom-32 md:py-0 md:px-4 xl:mx-8 px-0 hero-listing">
      <h4 className="font-clash font-normal leading-[24.6px] text-darkPrimary text-xl lg:text-4xl xs:text-3xl lg:mb-6 hero-listing-h4">
        New ceramics
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[4.8rem] lg:gap-[1.5rem] xs:gap-y-[8rem] md:gap-0 md:gap-x-4 hero-prodcuts">
        <ProductCard
          name="testname"
          relativeImage="Vase"
          heading="Rustic Vase Set"
          price={155}
          id="1"
        />

        <ProductCard
          name="testname"
          relativeImage="lamp" 
          heading="The Lucy Lamp" 
          price={399}
          id="2" 
        />

        <ProductCard
          name="testname"
          relativeImage="SilkVase"
          heading="The Silky Vase"
          price={125}
          id="3"
        />

       <div className="hero-product">
       <ProductCard
          name="testname"
          relativeImage="BlackChair"
          heading="The Dandy chair"
          price={250}
          id="4"
        />
       </div>
      </div>

      <button className="relative md:top-[15rem] lg:left-[30rem] md:left-[10rem] m-2 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg h-14 hero-button">
        View collection
      </button>
    </div>
  );
};

export default Listing;
