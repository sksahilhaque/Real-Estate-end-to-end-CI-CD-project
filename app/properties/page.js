'use client'
import { useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters from '../components/PropertyFilters'
import { properties } from '../data/sampleData'

export default function Properties() {
  const [filteredProperties] = useState(properties)

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Listings
          </h1>
          <p className="text-gray-600">
            Discover your perfect home from our exclusive collection
          </p>
        </div>

        <PropertyFilters />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
