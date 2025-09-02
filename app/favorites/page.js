'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, GitCompare } from 'lucide-react'

export default function Favorites() {
  // Simulated favorites and compare lists
  const [favorites] = useState([])
  const [compareList] = useState([])

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Favorites & Compare
          </h1>
          <p className="text-gray-600">
            Manage your saved properties and comparisons
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium">
            <Heart className="w-4 h-4 inline mr-2" />
            Favorites ({favorites.length})
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            <GitCompare className="w-4 h-4 inline mr-2" />
            Compare ({compareList.length})
          </button>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            No Favorites Yet
          </h2>
          <p className="text-gray-600 mb-6">
            Start exploring properties and save your favorites by clicking the
            heart icon.
          </p>
          <Link href="/properties" className="btn-primary">
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  )
}
