'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, MapPin, Bed, Bath, Square, Plus } from 'lucide-react'

export default function PropertyCard({ property }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isCompared, setIsCompared] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    setIsFavorited(!isFavorited)
  }

  const toggleCompare = (e) => {
    e.preventDefault()
    setIsCompared(!isCompared)
  }

  return (
    <div className="property-card">
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full transition-colors ${
              isFavorited
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={toggleCompare}
            className={`p-2 rounded-full transition-colors ${
              isCompared
                ? 'bg-primary-500 text-white'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-lg font-bold">
            ${property.price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="p-6">
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area} ft²</span>
          </div>
        </div>
      </div>
    </div>
  )
}
