"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { properties } from "../../data/sampleData";
import PropertyGallery from "../../components/PropertyGallery";
import ContactModal from "../../components/ContactModal";
import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react";

export default function PropertyDetail({ params }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const property = properties.find((p) => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PropertyGallery images={property.images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{property.area} sq ft</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Built {property.yearBuilt}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-sm font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">
                    Interactive Map Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-3xl font-bold text-primary-600 mb-4">
                ${property.price.toLocaleString()}
              </div>
              <button
                onClick={() => setShowContactModal(true)}
                className="btn-primary w-full mb-4"
              >
                Contact Agent
              </button>
              <button className="btn-secondary w-full">Schedule Tour</button>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Agent"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-gray-600">
                      {property.agent.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactModal
          property={property}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </div>
  );
}
