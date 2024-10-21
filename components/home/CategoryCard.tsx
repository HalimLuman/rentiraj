import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  title: string;
  link: string;
};

const CategoryCard = ({ icon: Icon, title, link }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2.5 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer">
      {/* Icon */}
      <div className="mb-2 text-gray-700">
        <Icon size={24} />
      </div>

      {/* Title */}
      <Link href={`/shop/${link}`}>
      <h4 className="font-medium text-center">{title}</h4>
      </Link>
    </div>
  );
};

export default CategoryCard;
