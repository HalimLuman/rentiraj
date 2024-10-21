'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Package, ClipboardList, Truck, RotateCcw, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Package, title: 'Choose Your Product', description: 'Select the product and rental duration.' },
  { icon: ClipboardList, title: 'Enter Your Details', description: 'Provide contact and shipping information.' },
  { icon: Truck, title: 'We Pack and Ship', description: 'Product is packed securely and shipped to you.' },
  { icon: RotateCcw, title: 'Return the Product', description: 'Return using the provided shipping label.' },
]

export default function ImprovedShippingProcess() {
  return (
    <div className="w-[90%] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How Our Service Works</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="mt-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to get started?</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Browse Products
          </button>
        </motion.div> */}
      </div>
    </div>
  )
}