import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Products",
  description: "Premium network cameras and computer accessories for home security and business needs.",
};

const cameras = [
  {
    id: "indoor-wifi",
    name: "Indoor WiFi Camera",
    price: "$79",
    image: "/products/indoor-camera.svg",
    features: ["1080p HD", "Night Vision", "Two-way Audio", "Mobile App"],
    bestseller: true,
  },
  {
    id: "outdoor-security",
    name: "Outdoor Security Camera",
    price: "$129",
    image: "/products/outdoor-camera.svg",
    features: ["4K Resolution", "Weatherproof", "Motion Detection", "Cloud Storage"],
    bestseller: true,
  },
];

const accessories = [
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: "$89",
    image: "/products/keyboard.svg",
    features: ["RGB Backlit", "Cherry MX Switches", "N-Key Rollover", "Aluminum Frame"],
    bestseller: false,
  },
  {
    id: "gaming-mouse",
    name: "Gaming Mouse",
    price: "$59",
    image: "/products/mouse.svg",
    features: ["16000 DPI", "Programmable Buttons", "Ergonomic Design", "RGB Lighting"],
    bestseller: false,
  },
];

const aiProducts = [
  {
    id: "ai-desktop-case",
    name: "AI Desktop Case",
    price: "$299",
    image: "/products/ai-case.svg",
    features: ["GPU Optimized", "Superior Cooling", "Tool-free Design", "RGB Control"],
    bestseller: true,
  },
  {
    id: "ai-solutions",
    name: "Custom AI Solutions",
    price: "Contact Us",
    image: "/products/ai-solutions.svg",
    features: ["Tailored Solutions", "End-to-End Support", "Scalable Architecture", "Training Included"],
    bestseller: false,
  },
];

function ProductCard({ product }: { product: typeof cameras[0] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition group">
      <div className="aspect-square bg-slate-50 relative">
        {product.bestseller && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full z-10">
            Bestseller
          </span>
        )}
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
        <ul className="space-y-2 text-sm text-slate-600 mb-4">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductsPage() {
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
            Premium network cameras and computer accessories for home security and productivity.
          </p>
        </div>

        {/* Network Cameras */}
        <section id="cameras" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📹</span>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Network Cameras</h2>
              <p className="text-slate-600">Professional-grade security cameras</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cameras.map((camera) => (
              <ProductCard key={camera.id} product={camera} />
            ))}
          </div>
        </section>

        {/* Computer Accessories */}
        <section id="accessories" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⌨️</span>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Computer Accessories</h2>
              <p className="text-slate-600">Premium peripherals for every setup</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((acc) => (
              <ProductCard key={acc.id} product={acc} />
            ))}
          </div>
        </section>

        {/* AI Solutions */}
        <section id="ai" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🤖</span>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">AI Solutions</h2>
              <p className="text-slate-600">Next-gen AI-powered products</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Our team is ready to help you find the perfect products for your needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
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
