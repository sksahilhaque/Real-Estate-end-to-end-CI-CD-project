import { Award, Users, Clock, Shield } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Service',
      description:
        'Recognized for excellence in luxury real estate with multiple industry awards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Our experienced agents have deep knowledge of local markets and trends.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock assistance for all your real estate needs and inquiries.',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description:
        'Transparent processes and secure transactions for your peace of mind.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Premium Realty?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing exceptional service and helping
            you achieve your real estate goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
