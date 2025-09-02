import { Users, Award, Home, Heart } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      bio: '15+ years in luxury real estate',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Agent',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      bio: 'Specialist in commercial properties',
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Director',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Expert in digital marketing strategies',
    },
  ]

  const stats = [
    { icon: Home, label: 'Properties Sold', value: '1,200+' },
    { icon: Users, label: 'Happy Clients', value: '800+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Years Experience', value: '15+' },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Premium Realty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We&apos;re more than just a real estate company. We&apos;re your
            partners in finding the perfect home and making your property dreams
            come true.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 2008, Premium Realty has been at the forefront of
                luxury real estate in the metropolitan area. What started as a
                small boutique agency has grown into one of the most trusted
                names in the industry.
              </p>
              <p className="text-gray-700 mb-6">
                Our success is built on three pillars: exceptional service, deep
                market knowledge, and unwavering commitment to our clients. We
                believe that buying or selling a home is one of life's most
                important decisions, and we&apos;re here to guide you every step
                of the way.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Modern office"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of real estate professionals is dedicated to
              providing exceptional service and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-56 h-56 rounded-full mx-auto object-cover shadow-lg ring-4 ring-white"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
