import { hero } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const Banner = () => {
  return (
    <div className="relative  lg:w-[90%] xl:w-[95%] mx-auto">
      {/* Image */}
      <div className="relative w-full max-h-[400px] sm:max-h-[600px]">
        <Image
          src={hero}
          alt="Hero"
          className="rounded-lg object-cover"
          width={1600}
          height={600}
        />

        {/* Content on top of the Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 max-lg:mb-20 sm:p-10 lg:p-16 space-y-6 w-[80%] xl:w-[60%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Rent Anything You Need, Anytime
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 hidden md:block">
            From tech gadgets to household items, find and rent the everyday products you need without the hassle of ownership.
          </p>
          <Button className="px-5 sm:px-8 py-5 h-10 lg:h-12 sm:py-4 mt-2 bg-blue-600 text-white font-semibold text-md sm:text-lg rounded-lg hover:bg-blue-700 transition-all">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
