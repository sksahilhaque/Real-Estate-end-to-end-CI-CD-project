'use client'
import { useState } from 'react'
import {
  Filter,
  ChevronDown,
  MapPin,
  DollarSign,
  Home,
  Bed,
} from 'lucide-react'

export default function PropertyFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    location: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    propertyType: '',
  })

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Filter className="w-6 h-6 mr-3 text-primary-600" />
          Filter Properties
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 ${
          isOpen ? 'block' : 'hidden md:grid'
        }`}
      >
        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option value="">Any location</option>
              <option value="manhattan">Manhattan, NY</option>
              <option value="brooklyn">Brooklyn, NY</option>
              <option value="beverly-hills">Beverly Hills, CA</option>
              <option value="austin">Austin, TX</option>
              <option value="miami">Miami, FL</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Price
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
              value={filters.priceMin}
              onChange={(e) =>
                setFilters({ ...filters, priceMin: e.target.value })
              }
            >
              <option value="">No minimum</option>
              <option value="500000">$500K</option>
              <option value="1000000">$1M</option>
              <option value="2000000">$2M</option>
              <option value="5000000">$5M</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
              value={filters.priceMax}
              onChange={(e) =>
                setFilters({ ...filters, priceMax: e.target.value })
              }
            >
              <option value="">No maximum</option>
              <option value="1000000">$1M</option>
              <option value="2000000">$2M</option>
              <option value="5000000">$5M</option>
              <option value="10000000">$10M+</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <div className="relative">
            <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
              value={filters.bedrooms}
              onChange={(e) =>
                setFilters({ ...filters, bedrooms: e.target.value })
              }
            >
              <option value="">Any bedrooms</option>
              <option value="1">1+ bedrooms</option>
              <option value="2">2+ bedrooms</option>
              <option value="3">3+ bedrooms</option>
              <option value="4">4+ bedrooms</option>
              <option value="5">5+ bedrooms</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
              value={filters.propertyType}
              onChange={(e) =>
                setFilters({ ...filters, propertyType: e.target.value })
              }
            >
              <option value="">Any type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}
