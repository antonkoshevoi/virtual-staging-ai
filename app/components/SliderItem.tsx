import React from "react";
import Image from "next/image";

interface SliderItemProps {
  image: string;
}
const SliderItem: React.FC<SliderItemProps> = ({ image }) => {
  return (
    <div className="h-full relative ">
      <Image
        src={image}
        alt="image-before"
        fill
        objectFit="contain"
        objectPosition="top"
      />
      <div className="absolute w-8 h-full bg-white left-1/2 -translate-x-[50%]"></div>
      <div className="absolute top-0 left-0 w-40 bg-white/90 py-3 flex items-center justify-center uppercase text-2xl">
        Before
      </div>
      <div className="absolute right-0 top-0 w-40 bg-white/90 py-3 flex items-center justify-center uppercase text-2xl">
        After
      </div>
    </div>
  );
};

export default SliderItem;
