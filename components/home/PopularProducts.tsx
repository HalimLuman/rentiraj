import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { FaLaptop, FaMobileAlt, FaHeadphones } from 'react-icons/fa'; // Example icons
import Image from 'next/image';
import { alienware, banner, dyson, iphone, ps5 } from '@/public/assets';

const popularProducts = [
    {
      id: 1,
      name: 'Dyson Airwrap Complete Styler',
      image: dyson,
      price: '$599',
      description: 'A multi-functional hair styling tool that dries and styles simultaneously, perfect for all hair types.',
    },
    {
      id: 2,
      name: 'Sony PlayStation 5',
      image: ps5,
      price: '$499',
      description: 'The ultimate gaming console with 4K gaming, lightning-fast load times, and a new level of immersion.',
    },
    {
      id: 3,
      name: 'Alienware 34" Curved Gaming Monitor',
      image: alienware,
      price: '$1,099',
      description: 'A stunning curved gaming monitor with a high refresh rate, G-Sync support, and immersive visuals.',
    },
    {
      id: 4,
      name: 'Apple iPhone 14 Pro',
      image: iphone,
      price: '$999',
      description: 'The latest iPhone with A16 Bionic chip, ProMotion display, and an advanced triple-camera system.',
    },
  ];

const PopularProducts = () => {
  return (
    <div className="w-[80%] py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-5 self-start">Popular Products</h2>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
      
    >
      <CarouselContent>
        {popularProducts.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
             <div className="relative w-full h-48 rounded-md shadow-md border bg-white border-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain rounded-lg"
                  layout="fill"
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold h-[60px]">{product.name}</h3>
              <p className="text-gray-500 truncate">{product.description}</p>
              <p className='font-medium'><span className='font-bold'>{product.price}</span>{" "}/monthly</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:flex'/>
      <CarouselNext className='hidden md:flex'/>
    </Carousel>
    </div>
  );
};

export default PopularProducts;
