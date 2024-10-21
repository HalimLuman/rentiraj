import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ps5, iphone, dyson, banner, alienware, electronics } from '@/public/assets'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Electronics', image: electronics, description: 'Rent the latest gadgets and tech for your needs' },
  { name: 'Home & Garden', image: iphone, description: 'Transform your space with our rental home and garden equipment' },
  { name: 'Sports & Outdoors', image: dyson, description: 'Get active with our sports and outdoor rental gear' },
  { name: 'Party & Events', image: banner, description: 'Make your event unforgettable with our party rentals' },
  { name: 'Tools & Equipment', image: alienware, description: 'Find the right tools for any job, available for rent' },
]

export default function BentoShowcase() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-blue-600">Rent Smarter</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
          Everything you need, without the commitment
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured category */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-0 rounded-lg bg-white shadow-lg lg:rounded-l-2xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 z-10">
                <p className="mt-2 text-2xl font-medium tracking-tight text-gray-900">{categories[0].name}</p>
                <p className="mt-2 text-sm text-gray-600">{categories[0].description}</p>
              </div>
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={categories[0].image}
                  alt={categories[0].name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 rounded-xl border-gray-700"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div> {/* Overlay */}
              </div>
              <Link href={`/category/${categories[0].name.toLowerCase().replace(' & ', '-')}`} className="absolute bottom-8 right-8 flex items-center text-blue-600 hover:text-blue-800">
                <span className="text-lg font-semibold">View All</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Other categories */}
          {categories.slice(1).map((category, index) => (
            <div key={category.name} className={`relative ${index === 2 ? 'lg:col-start-2 lg:row-start-2' : ''}`}>
              <div className="absolute inset-0 rounded-lg bg-white shadow-lg"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">{category.name}</p>
                  <p className="mt-2 text-sm text-gray-600">{category.description}</p>
                </div>
                <div className="flex flex-1 items-center justify-center p-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
                <Link href={`/category/${category.name.toLowerCase().replace(' & ', '-')}`} className="absolute bottom-6 right-6 flex items-center text-blue-600 hover:text-blue-800">
                  <span className="text-sm font-semibold">View All</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}