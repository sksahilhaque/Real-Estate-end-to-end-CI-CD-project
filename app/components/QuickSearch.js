'use client'
import { useState } from 'react'
import { Search, MapPin, DollarSign, Home, ChevronDown } from 'lucide-react'

export default function QuickSearch() {
  const [searchData, setSearchData] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    keywords: '',
  })

  const handleSearch = (e) => {
    e.preventDefault()
    alert('Search functionality would be implemented with backend integration')
  }

  return (
    <section className="bg-white py-16 -mt-16 relative z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Find Your Perfect Home
          </h2>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
                    value={searchData.location}
                    onChange={(e) =>
                      setSearchData({ ...searchData, location: e.target.value })
                    }
                  >
                    <option value="">Choose location</option>
                    <option value="manhattan">Manhattan, NY</option>
                    <option value="brooklyn">Brooklyn, NY</option>
                    <option value="beverly-hills">Beverly Hills, CA</option>
                    <option value="austin">Austin, TX</option>
                    <option value="miami">Miami, FL</option>
                    <option value="boston">Boston, MA</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-700 font-medium"
                    value={searchData.priceRange}
                    onChange={(e) =>
                      setSearchData({
                        ...searchData,
                        priceRange: e.target.value,
                      })
                    }
                  >
                    <option value="">Select budget</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m-5m">$2M - $5M</option>
                    <option value="5m+">$5M+</option>
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
                    value={searchData.propertyType}
                    onChange={(e) =>
                      setSearchData({
                        ...searchData,
                        propertyType: e.target.value,
                      })
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
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Now
                </button>
              </div>
            </div>

            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords or Address
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter keywords, address, or MLS number..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 hover:border-gray-300 text-gray-700 font-medium placeholder-gray-400"
                  value={searchData.keywords}
                  onChange={(e) =>
                    setSearchData({ ...searchData, keywords: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
