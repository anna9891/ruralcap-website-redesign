import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Rural Alaska Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Providing essential services and support to strengthen families and communities across rural Alaska.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-primary inline-block text-center">
              Explore Our Services
            </Link>
            <Link href="/contact" className="btn-secondary inline-block text-center bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              Get Help Today
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,100 420,100 740,40 C1060,-20 1160,-20 1440,40 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero