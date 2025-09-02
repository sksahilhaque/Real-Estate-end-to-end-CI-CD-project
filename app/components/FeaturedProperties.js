'use client'
import { useState, useEffect, useRef } from 'react'
import PropertyCard from './PropertyCard'
import { properties } from '../data/sampleData'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef(null)
  const featuredProperties = properties.filter((p) => p.featured)
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 }

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return itemsPerView.mobile
      if (window.innerWidth < 1024) return itemsPerView.tablet
    }
    return itemsPerView.desktop
  }

  const [currentItemsPerView, setCurrentItemsPerView] =
    useState(getItemsPerView())

  const nextSlide = () => {
    const maxIndex = Math.max(
      0,
      featuredProperties.length - currentItemsPerView
    )
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxIndex = Math.max(
      0,
      featuredProperties.length - currentItemsPerView
    )
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const handleResize = () => {
      setCurrentItemsPerView(getItemsPerView())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered, currentItemsPerView])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Featured Properties
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties in the most
            desirable locations around the world.
          </p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={scrollRef}
              className="flex transition-all duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`,
              }}
            >
              {featuredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 transition-all duration-500"
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-4 hover:bg-white hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-4 hover:bg-white hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.max(
                1,
                featuredProperties.length - currentItemsPerView + 1
              ),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
