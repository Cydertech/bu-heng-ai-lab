import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Professional installation, maintenance, and consulting services for network cameras and AI solutions.",
};

const services = [
  {
    id: "installation",
    title: "Installation Services",
    icon: "🔧",
    price: "From $99",
    description: "Professional installation for all your equipment needs",
    features: [
      "On-site professional installation",
      "Complete system setup and configuration",
      "Mobile app integration",
      "User training included",
      "30-day support warranty",
    ],
    popular: true,
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    icon: "⚙️",
    price: "From $49/mo",
    description: "Ongoing maintenance and technical support services",
    features: [
      "Regular system health checks",
      "Firmware updates",
      "Remote troubleshooting",
      "Priority support queue",
      "Equipment replacement discount",
    ],
    popular: false,
  },
  {
    id: "consulting",
    title: "AI Consulting",
    icon: "💡",
    price: "Custom Quote",
    description: "Expert consultation for custom AI solutions",
    features: [
      "Needs assessment",
      "Solution architecture",
      "Proof of concept",
      "Implementation roadmap",
      "Training & documentation",
    ],
    popular: false,
  },
  {
    id: "rental",
    title: "Equipment Rental",
    icon: "📦",
    price: "Flexible Pricing",
    description: "AI equipment rental with full maintenance",
    features: [
      "Flexible rental terms",
      "Full maintenance included",
      "24/7 technical support",
      "Upgrade options available",
      "Insurance coverage",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            CyderTech
          </Link>
          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="/products" className="hover:text-slate-900 transition">Products</Link>
            <Link href="/services" className="text-blue-600 font-medium">Services</Link>
            <Link href="/about" className="hover:text-slate-900 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
            <Link href="/cart" className="hover:text-slate-900 transition text-lg">🛒</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert installation, maintenance, and consulting services to help you get the most out of your technology investment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white border rounded-2xl p-8 relative ${
                service.popular ? "border-blue-500 shadow-lg" : "border-slate-200"
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-blue-600 font-semibold">{service.price}</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact"
                className="block text-center py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-slate-400 text-sm">Tell us your needs and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Proposal</h3>
              <p className="text-slate-400 text-sm">Receive a customized solution plan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-slate-400 text-sm">Professional setup by our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-slate-400 text-sm">Ongoing maintenance and help</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 CyderTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
