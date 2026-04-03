import Link from "next/link";

export const metadata = {
  title: "Products",
  description: "Premium network cameras and computer accessories for home security and business needs.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "network-cameras",
      title: "Network Cameras",
      description: "High-quality surveillance cameras for home and business security",
      icon: "📹",
      items: [
        { name: "Indoor WiFi Camera", price: "$79", features: ["1080p HD", "Night Vision", "Two-way Audio", "Mobile App"] },
        { name: "Outdoor Security Camera", price: "$129", features: ["4K Resolution", "Weatherproof", "Motion Detection", "Cloud Storage"] },
        { name: "PTZ Camera System", price: "$299", features: ["Pan-Tilt-Zoom", "360° Coverage", "AI Tracking", "NVR Compatible"] },
      ]
    },
    {
      id: "computer-accessories",
      title: "Computer Accessories",
      description: "Premium peripherals and components for your computing needs",
      icon: "⌨️",
      items: [
        { name: "Mechanical Keyboard", price: "$89", features: ["RGB Backlit", "Cherry MX Switches", "N-Key Rollover", "Aluminum Frame"] },
        { name: "Gaming Mouse", price: "$59", features: ["16000 DPI", "Programmable Buttons", "Ergonomic Design", "RGB Lighting"] },
        { name: "USB-C Hub", price: "$49", features: ["7-in-1 Ports", "4K HDMI", "Fast Charging", "Compact Design"] },
      ]
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Custom AI-powered solutions for modern businesses",
      icon: "🤖",
      items: [
        { name: "AI Desktop Case", price: "$299", features: ["GPU Optimized", "Superior Cooling", "Tool-free Design", "RGB Control"] },
        { name: "Custom AI Project", price: "Contact Us", features: ["Tailored Solutions", "End-to-End Support", "Scalable Architecture", "Training Included"] },
        { name: "AI Equipment Rental", price: "Get Quote", features: ["Flexible Terms", "Full Maintenance", "24/7 Support", "Upgrade Options"] },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            CyderTech
          </Link>
          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="/products" className="text-blue-600 font-medium">Products</Link>
            <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
            <Link href="/about" className="hover:text-slate-900 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium network cameras and computer accessories that enhance security and productivity.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">
          {products.map((category) => (
            <section key={category.id} className="border-b border-slate-200 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  <p className="text-slate-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((product, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
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
