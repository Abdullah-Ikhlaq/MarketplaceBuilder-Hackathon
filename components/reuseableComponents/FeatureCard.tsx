import { CardProps } from "@/types/components";
import Image from "next/image";

const FeatureCard = ({ image, heading, para }: CardProps) => {
  return (
    <div className="p-8 flex border border-transparent flex-col gap-4 bg-transparent hover:bg-lightGray hover:border-darkPrimary transition-all duration-300 ease-in-out rounded w-[300px] md:mx-4 lg:mx-0 features">
      <Image
        src={`/images/${image}.png`}
        alt={`${image} Icon Image`}
        width={50}
        height={50}
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
      />
      <h5 className="font-clash font-normal leading-[22.4px] text-darkPrimary text-xl">
        {heading}
      </h5>
      <p className="font-satoshi font-normal md:text-[0.95rem]  leading-[21px] text-darkPrimary ">
        {para}
      </p>
    </div>
  );
};

export default FeatureCard;
