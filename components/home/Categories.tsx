import React from 'react';
import CategoryCard from './CategoryCard'; // Import CategoryCard
import { categories } from '@/constants';

const Categories = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] lg:w-[70%] 2xl:w-[60%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.label}
            link={category.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
